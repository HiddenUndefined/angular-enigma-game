import { Injectable, Input } from '@angular/core'
// Models
import { IGridSize } from './core.models'
// Services
import { StatusesService } from './statuses/statuses.service'
import { GridAreaService } from './grid-area/grid-area.service'

@Injectable({
  providedIn: 'root'
})
export class QuickDrawCoreService {
  /**
   * Timer ID for random select free cell in the grid and it's current value
   */
  timerDelay = 5000 // ms
  timerId!: number
  timerValue!: number

  constructor (
    private areaService: GridAreaService,
    private gameStatus: StatusesService
  ) {
  }

  // @Methods
  startGame (): void {
    this.gameStatus.setStarted()

    this.areaService.selectNextActiveCell()
  }

  continueGame (): void {
    this.gameStatus.setStarted()

    this.createCounterTimer()
  }

  stopGame (): void {
    this.gameStatus.setPaused()

    this.stopCounterTimer()
  }

  endGame (): void {
    this.gameStatus.setOver()

    this.stopCounterTimer()
  }

  initGame (): void {
    this.areaService.generateGrid()
  }

  private setTimerValue (): void {
    this.timerValue = this.timerDelay / 1000
  }

  private clearCounterTimer (): void {
    // Clear timer if exists
    clearTimeout(this.timerId)
    // Clear timer value
    this.setTimerValue()
  }

  private stopCounterTimer (): void {
    // Clear timer if exists
    clearTimeout(this.timerId)
  }

  private createCounterTimer (): void {
    // Clear timer if exists
    if (this.timerId) {
      clearTimeout(this.timerId)
    }

    // Set timer value (in seconds) if not exists
    if (!this.timerValue) {
      this.setTimerValue()
    }

    // Create timer with 1 sec delay
    this.timerId = setTimeout(() => {
      this.timerValue -= 1

      if (this.timerValue > 0) {
        this.createCounterTimer()
      }
      else {
        this.areaService.selectNextActiveCell()
      }
    }, 1000)
  }
}
