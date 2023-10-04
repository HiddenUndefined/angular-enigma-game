import { Injectable } from '@angular/core'
import { EGridCellStatus, ICell, IGridSize, TGridCellStatus } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class GridAreaService {
  // @Properties
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
    // Select random cell
    this.randomSelectNextActiveCells()
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

  /**
   * Check if active cell is available
   * @returns {boolean}
   */
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

  /**
   * Change all cells with «active» statue to «lose»
   */
  public makeActiveCellsLose (): void {
    for (let i = 0, rowCount = this.gameArea.length; i < rowCount; i++) {
      for (let j = 0, cellCountInRow = this.gameArea[ i ].length; j < cellCountInRow; j++) {
        if (this.gameArea[ i ][ j ] === EGridCellStatus.ACTIVE) {
          this.setCellStatus({ x: i, y: j }, EGridCellStatus.LOSE)
        }
      }
    }
  }

  /**
   * Randomly select next active cells
   * @TODO It's a temporary solution. Refactor it.
   *       Need more flexibility with `countOfRandomCells`, as the count can be less then *7* if more cells in the grid are active.
   * @private
   */
  private randomSelectNextActiveCells (): void {
    const countOfRandomCells = 7
    const randomRows: number[] = []
    this.getRandomRows(randomRows, countOfRandomCells)
    const randomCols: number[] = []
    this.getRandomCols(randomCols, countOfRandomCells)

    // Cycle through count
    for (let i = 0; i < countOfRandomCells; i++) {
      // Check if cell is empty
      if (this.gameArea[ randomRows[ i ] ][ randomCols[ i ] ] === null) {
        this.makeCellActive({ x: randomRows[ i ], y: randomCols[ i ] })
      }
    }
  }

  // Randomizers
  private getRandomArbitrary (min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min)
  }

  // TODO: It's boilerplate code. Refactor it.
  private getRandomRows (array: number[], count: number): number[] {
    const random = this.getRandomArbitrary(0, this.gridSize.rows - 1)

    if (array.length < count && array.indexOf(random) === -1) array.push(random)

    return array.length === count ? array : this.getRandomRows(array, count)
  }
  private getRandomCols (array: number[], count: number): number[] {
    const random = this.getRandomArbitrary(0, this.gridSize.cols - 1)

    if (array.length < count && array.indexOf(random) === -1) array.push(random)

    return array.length === count ? array : this.getRandomCols(array, count)
  }
}
