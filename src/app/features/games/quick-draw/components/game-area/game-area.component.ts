import { Component, Input, OnInit } from '@angular/core'
import { NgClass, NgForOf } from '@angular/common'

// Types
type TGridCellStatus = 'active' | 'win' | 'lose' | string

// Interfaces
interface IGridSize {
  rows: number
  cols: number
}

@Component({
  standalone: true,
  selector: 'eg-quick-draw-game-area',
  templateUrl: './game-area.component.html',
  imports: [
    NgForOf,
    NgClass
  ],
  styleUrls: ['./game-area.component.css']
})
export class GameAreaComponent implements OnInit {
  /**
   * Grid size with default values
   * @private
   */
  @Input() gridSize: IGridSize = {
    rows: 10,
    cols: 10
  }
  /**
   * Game area grid
   */
  gameArea!: Array<Array<TGridCellStatus>>

  // @Lifecycle
  ngOnInit (): void {
    this.generateGrid()
  }

  // @Methods
  /**
   * Set active cell coordinates in the grid (by index)
   * @param {number} x - cell position in the grid (by row index)
   * @param {number} y - cell position in the grid (by col index)
   * @param {TGridCellStatus} status - cell status
   */
  protected setActiveCell (x: number, y: number, status: TGridCellStatus): void {
    this.gameArea[ x ][ y ] = this.gameArea[ x ][ y ] === '' ? 'win' : 'lose'
  }

  /**
   * Generate game area grid
   */
  private generateGrid (): void {
    const grid = []

    for (let i = 0; i < this.gridSize.rows; i++) {
      const row = []
      for (let j = 0; j < this.gridSize.cols; j++) {
        row.push('')
      }

      grid.push(row)
    }

    this.gameArea = grid
  }
}
