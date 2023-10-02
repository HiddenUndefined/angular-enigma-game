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
  setWinStatusToCell (x: number, y: number): void {
    this.setCellStatus(x, y, EGridCellStatus.WIN)
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

  selectNextActiveCell (): void {
    // Make active cell lose
    this.makeActiveCellLose()

    // Select random cell
    const { x, y } = this.selectRandomCell()

    // Change active cell status
    this.setCellStatus(x, y, EGridCellStatus.ACTIVE)
  }

  /**
   * Set cell status
   * @param {number} x - cell position row index
   * @param {number} y - cell position col index
   * @param {TGridCellStatus} status - cell status
   */
  protected setCellStatus (x: number, y: number, status: TGridCellStatus): void {
    // Set active cell position in the grid
    this.activeCell = { x, y }
    // Set cell status
    this.gameArea[ x ][ y ] = status
  }

  private selectRandomCell (): ICell {
    const x = Math.floor(Math.random() * this.gridSize.rows)
    const y = Math.floor(Math.random() * this.gridSize.cols)

    return this.gameArea[ x ][ y ] === null ? { x, y } : this.selectRandomCell()
  }

  private makeActiveCellLose (): void {
    if (this.activeCell) {
      const { x, y } = this.activeCell

      this.setCellStatus(x, y, EGridCellStatus.LOSE)
    }
  }
}
