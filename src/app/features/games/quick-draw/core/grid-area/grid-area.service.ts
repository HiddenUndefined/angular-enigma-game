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

  /** The collection of active cells with position {x, y} values */
  activeCells: Array<ICell> = new Array<ICell>()

  // @Methods
  public setWinStatusToCell (position: ICell): void {
    // Set cell status
    this.setCellStatus(position, EGridCellStatus.WIN)

    // Remove cell from active cells
    this.activeCells.splice(this.activeCells.indexOf(position), 1)
  }

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

  public resetGrid (): void {
    this.activeCells = []

    this.generateGrid()
  }

  public selectNextActiveCells (): void {
    // Make active cell lose
    this.makeActiveCellsLose()

    // Select random cell
    this.randomSelectNextActiveCells()
  }

  public getCellStatus (position: ICell): TGridCellStatus {
    return this.gameArea[ position.x ][ position.y ]
  }

  public checkCellIsAvailableForPlayer (position: ICell): boolean {
    return this.getCellStatus(position) === EGridCellStatus.ACTIVE && this.activeCells.indexOf(position) === -1
  }

  public checkActiveCellIsAvailable (): boolean {
    return this.activeCells.length > 0
  }

  public makeActiveCellsLose (): void {
    this.activeCells.forEach((cell) => {
      this.setCellStatus(cell, EGridCellStatus.LOSE)
    })
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

  private makeCellActive (position: ICell): void {
    this.activeCells.push(position)
    this.setCellStatus(position, EGridCellStatus.ACTIVE)
  }

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
