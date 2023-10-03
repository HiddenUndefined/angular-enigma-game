import { Injectable } from '@angular/core'
import { EGridCellStatus, ICell, IGridSize, TGridCellStatus } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class GridAreaService {
  gridSize: IGridSize = {
    rows: 10,
    cols: 10
  }

  gameArea!: Array<Array<TGridCellStatus>>

  activeCell!: ICell | null

  // @Methods
  setWinStatusToCell (position: ICell): void {
    this.setCellStatus(position, EGridCellStatus.WIN)
    this.activeCell = null
  }

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

  reset (): void {
    this.activeCell = null

    this.generateGrid()
  }

  randomSelectNextActiveCells (): void {
    const countOfRandomCells = 7
    const randomRows: number[] = []
    this.getRandomRows(randomRows, countOfRandomCells)
    const randomCols: number[] = []
    this.getRandomCols(randomCols, countOfRandomCells)

    // Cycle through count
    for (let i = 0; i < countOfRandomCells; i++) {
      // Check if cell is empty
      if (this.gameArea[ randomRows[ i ] ][ randomCols[ i ] ] === null) {
        this.setCellStatus({ x: randomRows[ i ], y: randomCols[ i ] }, EGridCellStatus.ACTIVE)
      }
    }
  }

  public selectNextActiveCell (): void {
    // Make active cell lose
    this.makeActiveCellLose()

    // Select random cell
    this.randomSelectNextActiveCells()
  }

  public getCellStatus (position: ICell): TGridCellStatus {
    return this.gameArea[ position.x ][ position.y ]
  }

  public checkCellIsActive (position: ICell): boolean {
    return this.getCellStatus(position) === EGridCellStatus.ACTIVE
  }

  /**
   * Set cell status
   * @param {ICell} position - cell position by row and col indexes
   * @param {TGridCellStatus} status - cell status
   */
  private setCellStatus (position: ICell, status: TGridCellStatus): void {
    // Set active cell position in the grid
    this.activeCell = position
    // Set cell status
    this.gameArea[ position.x ][ position.y ] = status
  }

  private makeActiveCellLose (): void {
    if (this.activeCell) {
      this.setCellStatus(this.activeCell, EGridCellStatus.LOSE)
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
