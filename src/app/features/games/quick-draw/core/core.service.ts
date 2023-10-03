import { Injectable } from '@angular/core'
// Services
import { StatusesService } from '@quickDraw/core/statuses'
import { GridAreaService } from '@quickDraw/core/grid-area'
import { ControlService } from '@quickDraw/core/control'

@Injectable({
  providedIn: 'root'
})
export class QuickDrawCoreService {

  constructor (
    private area: GridAreaService,
    private gameStatus: StatusesService,
    private control: ControlService
  ) {
  }

  // @Methods
  startGame (): void {
    this.gameStatus.setStarted()

    this.control.createCounterTimer()

    this.area.selectNextActiveCell()
  }

  continueGame (): void {
    this.gameStatus.setStarted()

    this.control.createCounterTimer()
  }

  stopGame (): void {
    this.gameStatus.setPaused()

    this.control.stopCounterTimer()
  }

  resetGame (): void {
    this.gameStatus.resetStatus()

    this.control.resetCounterTimer()

    this.area.reset()
  }

  initGame (): void {
    this.area.generateGrid()
  }
}
