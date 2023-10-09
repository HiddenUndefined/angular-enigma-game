import { Injectable } from '@angular/core'
import { interval, map, Observable, Subscription, takeWhile } from 'rxjs'
// Services
import { StatusesService } from '@quickDraw/core/statuses'
import { GridAreaService } from '@quickDraw/core/grid-area'
import { ControlService } from '@quickDraw/core/control'
import { ScoreService } from '@quickDraw/core/score'
import { EWinnerSides } from '@quickDraw/core/core.models'
import { NotificationService } from '@quickDraw/core/notification'
import { SetupManagerService } from '@quickDraw/core/setup-manager'
import {
  computerWinNotification, drawNotification,
  initGameNotification,
  pauseGameNotification,
  playerWinNotification
} from '@quickDraw/core/notification/notification.collection'

@Injectable({
  providedIn: 'root'
})
export class QuickDrawCoreService {
  // @Properties
  // Round
  private roundTimerDuration = 0
  private roundCount = 0

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

  // Game status
  public get gameNotStarted (): boolean {
    return this.gameStatus.isNotStarted
  }
  public get getGameStatus (): string {
    return this.gameStatus.getGameStatusTitle
  }
  public get getGameRoundCount (): number {
    return this.roundCount
  }

  // @Constructor
  constructor (
    private setup: SetupManagerService,
    private notification: NotificationService,
    private area: GridAreaService,
    private gameStatus: StatusesService,
    private control: ControlService,
    private score: ScoreService
  ) {
  }

  // @Methods
  startGame (): void {
    this.notification.setViewStatus(false)

    this.score.resetScore()

    this.gameStatus.setStarted()

    this.makeRound()
  }

  stopGame (): void {
    this.clearPlayerTimer()

    this.notification.setNotification(pauseGameNotification)
    this.notification.setViewStatus(true)

    this.gameStatus.setPaused()
  }

  continueGame (): void {
    this.notification.setViewStatus(false)

    this.gameStatus.setStarted()

    this.createPlayerTimer()
  }

  resetGame (): void {
    this.destroyGame()

    this.initGame()
  }

  endGame (): void {
    this.clearPlayerTimer()

    this.gameStatus.setOver()

    if (this.score.getWinner() === EWinnerSides.PLAYER) {
      this.notification.setNotification(playerWinNotification)
    }
    else if (this.score.getWinner() === EWinnerSides.COMPUTER) {
      this.notification.setNotification(computerWinNotification)
    }
    else if (this.score.getWinner() === EWinnerSides.BOTH) {
      this.notification.setNotification(drawNotification)
    }

    this.notification.setViewStatus(true)
  }

  exitGame (): void {
    this.endGame()

    this.gameStatus.resetStatus()
  }

  initGame (): void {
    this.notification.setNotification(initGameNotification)
    this.notification.setViewStatus(true)

    this.area.setCountOfActiveCells(this.setup.getCurrentSetup.round.count)
    this.area.setGridParams(this.setup.getCurrentSetup.gridSize)
    this.area.generateGrid()

    this.score.resetScore()
    this.score.setWinScore(this.setup.getCurrentSetup.round.winScore)

    this.roundTimerDuration = this.setup.getCurrentSetup.round.timerDuration
    this.convertTimerDurationToPureValue()

    this.roundCount = 0

    this.gameStatus.setReady()
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
      this.endGame()
    }
    else {
      this.roundCount += 1
      this.createComputerTimer()
    }
  }

  private nextRoundIsValid (): boolean {
    return this.area.getCountOfEmptyCells() > 0
  }
}
