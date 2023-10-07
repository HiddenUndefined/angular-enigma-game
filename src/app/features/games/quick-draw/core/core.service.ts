import { Injectable } from '@angular/core'
import { Observable, Subscription, interval, map, takeWhile } from 'rxjs'
// Services
import { StatusesService } from '@quickDraw/core/statuses'
import { GridAreaService } from '@quickDraw/core/grid-area'
import { ControlService } from '@quickDraw/core/control'
import { ScoreService } from '@quickDraw/core/score'

@Injectable({
  providedIn: 'root'
})
export class QuickDrawCoreService {
  // @Properties
  // Round
  private roundTimerDuration = 8000 // ms

  public get getTimerValue (): number {
    return this.roundTimerValue
  }
  private roundTimerValue: number = this.roundTimerDuration / 1000 // sec
  // Computer move stream
  private computerMove$: Observable<void> = new Observable<void>()
  private computerMoveSubscription$: Subscription | null = null
  // Player move stream
  private playerMove$: Observable<void> = new Observable<void>()
  private playerMoveSubscription$: Subscription | null = null

  // @Constructor
  constructor (
    private area: GridAreaService,
    private gameStatus: StatusesService,
    private control: ControlService,
    private score: ScoreService
  ) {
  }

  // @Methods
  startGame (): void {
    this.score.resetScore()

    this.gameStatus.setStarted()

    this.makeRound()
  }

  stopGame (): void {
    this.clearPlayerTimer()

    this.gameStatus.setPaused()
  }

  continueGame (): void {
    this.gameStatus.setStarted()

    this.createPlayerTimer()
  }

  resetGame (): void {
    this.destroyGame()
  }

  initGame (): void {
    this.score.resetScore()

    this.area.generateGrid()

    this.gameStatus.resetStatus()
  }

  private convertTimerDurationToPureValue (): void {
    this.roundTimerValue = this.roundTimerDuration / 1000 // sec
  }

  private destroyGame (): void {
    this.clearComputerTimer()
    this.clearPlayerTimer()

    this.score.resetScore()

    this.gameStatus.resetStatus()

    this.area.resetGrid()
  }

  // Computer move timer
  private clearComputerTimer (): void {
    this.computerMoveSubscription$?.unsubscribe()
  }

  private createComputerTimer (): void {
    this.computerMove$ = new Observable<void>(observer => {
      this.area.selectNextActiveCells()

      observer.complete()
    })

    this.computerMoveSubscription$ = this.computerMove$.subscribe({
      complete: () => {
        this.control.toggleMoveSide()
        this.convertTimerDurationToPureValue()
        this.createPlayerTimer()
      }
    })
  }

  // Player move timer
  private clearPlayerTimer (): void {
    this.playerMoveSubscription$?.unsubscribe()
  }

  private createPlayerTimer (): void {
    this.playerMove$ = interval(1000)
      .pipe(
        // take(this.roundTimerValue),
        takeWhile(() => this.roundTimerValue > 0 && this.area.checkActiveCellIsAvailable()),
        map(() => {
          this.roundTimerValue -= 1
        })
      )

    this.playerMoveSubscription$ = this.playerMove$.subscribe({
      complete: () => {
        if (this.area.checkActiveCellIsAvailable()) {
          this.area.setLoseStatusToAllActiveCells()
          this.score.setPointToComputer()
        } else {
          this.score.setPointToPlayer()
        }

        this.control.toggleMoveSide()
        this.makeRound()
      }
    })
  }

  // Round
  private makeRound (): void {
    if (!this.nextRoundIsValid()) {
      this.stopGame()
    }
    else {
      this.createComputerTimer()
    }
  }

  private nextRoundIsValid (): boolean {
    return this.area.getCountOfEmptyCells() > 0
  }
}
