import { Injectable, Input } from '@angular/core'
import {
  EGameStatus, EGridCellStatus,
  ICell,
  IGridSize,
  TGameStatus,
  TGridCellStatus
} from '@features/games/quick-draw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class QuickDrawCoreService {
  /**
   * Grid size with default values
   * @private
   */
  @Input() gridSize: IGridSize = {
    rows: 10,
    cols: 10
  }
  @Input() timerDelay = 5000 // ms

  /**
   * Game statuses
   */
  gameStatus: TGameStatus = null

  /**
   * Game area grid
   */
  gameArea!: Array<Array<TGridCellStatus>>
  activeCell!: ICell | null

  /**
   * Timer ID for random select free cell in the grid and it's current value
   */
  timerId!: number
  timerValue!: number

  // @Methods
  /**
   * Set cell status
   * @param {number} x - cell position row index
   * @param {number} y - cell position col index
   * @param {TGridCellStatus} status - cell status
   */
  protected setCellStatus (x: number, y: number, status: TGridCellStatus): void {
    // Clear timer
    this.clearCounterTimer()

    // Set active cell position in the grid
    this.activeCell = { x, y }
    // Set cell status
    this.gameArea[ x ][ y ] = status

    // Create timer
    this.createCounterTimer()
  }

  /**
   * Start the game
   */
  startGame (): void {
    this.gameStatus = EGameStatus.STARTED

    this.selectActiveCell()
  }

  /**
   * Stop the game
   */
  continueGame (): void {
    this.gameStatus = EGameStatus.STARTED

    this.createCounterTimer()
  }

  /**
   * Stop the game
   */
  stopGame (): void {
    this.gameStatus = EGameStatus.PAUSED

    this.stopCounterTimer()
  }

  // Game status checkers
  get gameIsStarted (): boolean {
    return this.gameStatus === EGameStatus.STARTED
  }
  get gameIsPaused (): boolean {
    return this.gameStatus === EGameStatus.PAUSED
  }
  get gameIsOver (): boolean {
    return this.gameStatus === EGameStatus.OVER
  }

  /**
   * Set win cell
   */
  setWinStatusToCell (x: number, y: number): void {
    this.setCellStatus(x, y, EGridCellStatus.WIN)
    this.activeCell = null
  }

  /**
   * Generate game area grid
   */
  generateGrid (): void {
    const grid = []

    for (let i = 0; i < this.gridSize.rows; i++) {
      const row = []
      for (let j = 0; j < this.gridSize.cols; j++) {
        row.push(null)
      }

      grid.push(row)
    }

    this.gameArea = grid
  }

  /**
   * Select random cell in the grid
   */
  private selectRandomCell (): ICell {
    const x = Math.floor(Math.random() * this.gridSize.rows)
    const y = Math.floor(Math.random() * this.gridSize.cols)

    return this.gameArea[ x ][ y ] === null ? { x, y } : this.selectRandomCell()
  }

  /**
   * Select active cell in the grid
   */
  private selectActiveCell (): void {
    // Make active cell lose
    this.makeActiveCellLose()

    if (!this.gameIsOver) {
      // Select random cell
      const { x, y } = this.selectRandomCell()

      // Set timer value (in seconds)
      this.setTimerValue()
      // Change active cell status
      this.setCellStatus(x, y, EGridCellStatus.ACTIVE)
    }
  }

  /**
   * Make active cell lose
   */
  private makeActiveCellLose (): void {
    if (this.activeCell) {
      const { x, y } = this.activeCell

      this.setCellStatus(x, y, EGridCellStatus.LOSE)
    }
  }

  /**
   * Set up timer value
   */
  private setTimerValue (): void {
    this.timerValue = this.timerDelay / 1000
  }

  /**
   * Clear timer
   */
  private clearCounterTimer (): void {
    // Clear timer if exists
    clearTimeout(this.timerId)
    // Clear timer value
    this.setTimerValue()
  }

  /**
   * Stop timer
   */
  private stopCounterTimer (): void {
    // Clear timer if exists
    clearTimeout(this.timerId)
  }

  /**
   * Create timer
   */
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
        this.selectActiveCell()
      }
    }, 1000)
  }
}
