// Enums
export enum EGridCellStatus {
  ACTIVE = 'active',
  WIN = 'win',
  LOSE = 'lose'
}

// Types
export type TGridCellStatus = EGridCellStatus.ACTIVE
  | EGridCellStatus.WIN
  | EGridCellStatus.LOSE
  | null

// Interfaces
export interface IGridSize {
  rows: number
  cols: number
}
export interface IGridCellPosition {
  x: number
  y: number
}
