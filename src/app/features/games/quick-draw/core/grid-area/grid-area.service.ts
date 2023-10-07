import { Injectable } from '@angular/core'
import { EGridCellStatus, ICell, IGridSize, TGridCellStatus } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class GridAreaService {
  // @Properties
  gameOptions = {
    countOfActiveCells: 7
  }

  /** Grid size (rows and cols count) */
  gridSize: IGridSize = {
    rows: 10,
    cols: 10
  }

  /** Game area */
  gameArea: Array<Array<TGridCellStatus>> = []

  // @Methods
  /** Generate grid */
  public generateGrid (): void {
    const grid = []

    // Cycle through rows
    for (let i = 0; i < this.gridSize.rows; i++) {
      const row = []
      // Cycle through cols
      for (let j = 0; j < this.gridSize.cols; j++) {
        row.push(null)
      }

      grid.push(row)
    }

    // Set game area
    this.gameArea = grid
  }

  /** Reset grid */
  public resetGrid (): void {
    this.generateGrid()
  }

  /** Active cells generator */
  public selectNextActiveCells (): void {
    // Count of empty cells
    const countOfEmptyCells = this.getCountOfEmptyCells()

    // Select random cell
    this.randomSelectNextActiveCells(
      countOfEmptyCells > this.gameOptions.countOfActiveCells
        ? this.gameOptions.countOfActiveCells
        : countOfEmptyCells
    )
  }

  public getCountOfEmptyCells (): number {
    let emptyCellsCount = 0

    for (let i = 0, rowCount = this.gameArea.length; i < rowCount; i++) {
      for (let j = 0, cellCountInRow = this.gameArea[ i ].length; j < cellCountInRow; j++) {
        if (this.gameArea[ i ][ j ] === null) {
          emptyCellsCount += 1
        }
      }
    }

    return emptyCellsCount
  }

  /**
   * Set cell status to «lose»
   * @param position {ICell} - cell position by row and col indexes
   */
  public setWinStatusToCell (position: ICell): void {
    this.setCellStatus(position, EGridCellStatus.WIN)
  }

  /**
   * Check if cell is available for player
   * @param position {ICell} - cell position by row and col indexes
   * @returns {boolean}
   */
  public checkCellIsAvailableForPlayer (position: ICell): boolean {
    return this.gameArea[ position.x ][ position.y ] === EGridCellStatus.ACTIVE
  }

  public checkActiveCellIsAvailable (): boolean {
    let hasActiveCell = false

    for (let i = 0, rowCount = this.gameArea.length; i < rowCount; i++) {
      if (hasActiveCell) break

      for (let j = 0, cellCountInRow = this.gameArea[ i ].length; j < cellCountInRow; j++) {
        hasActiveCell = this.gameArea[ i ][ j ] === EGridCellStatus.ACTIVE

        if (hasActiveCell) break
      }
    }
    return hasActiveCell
  }

  public setLoseStatusToAllActiveCells (): void {
    for (let i = 0, rowCount = this.gameArea.length; i < rowCount; i++) {
      for (let j = 0, cellCountInRow = this.gameArea[ i ].length; j < cellCountInRow; j++) {
        if (this.gameArea[ i ][ j ] === EGridCellStatus.ACTIVE) {
          this.setCellStatus({ x: i, y: j }, EGridCellStatus.LOSE)
        }
      }
    }
  }

  /**
   * Set cell status
   * @param {ICell} position - cell position by row and col indexes
   * @param {TGridCellStatus} status - cell status
   */
  private setCellStatus (position: ICell, status: TGridCellStatus): void {
    // Set cell status
    this.gameArea[ position.x ][ position.y ] = status
  }

  /**
   * Make cell active
   * @param position
   * @private
   */
  private makeCellActive (position: ICell): void {
    this.setCellStatus(position, EGridCellStatus.ACTIVE)
  }

  private randomSelectNextActiveCells (countOfRandomCells: number): void {
    const { x, y } = this.getRandomCellPosition()

    // Cycle through count
    if (this.gameArea[ x ][ y ] === null) {
      this.makeCellActive({ x, y })
      countOfRandomCells -= 1
    }
    if (countOfRandomCells > 0) {
      this.randomSelectNextActiveCells(countOfRandomCells)
    }
  }

  private getRandomCellPosition (): ICell {
    const row = Math.floor(Math.random() * this.gameArea.length)
    const col = Math.floor(Math.random() * this.gameArea[ row ].length)

    return { x: row, y: col }
  }
}
