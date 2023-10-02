// Enums
export enum EGridCellStatus {
  ACTIVE = 'active',
  WIN = 'win',
  LOSE = 'lose'
}
export enum EGameStatus {
  STARTED = 'started',
  PAUSED = 'paused',
  OVER = 'over'
}

// Types
export type TGridCellStatus = EGridCellStatus.ACTIVE | EGridCellStatus.WIN | EGridCellStatus.LOSE | null
export type TGameStatus = EGameStatus.STARTED | EGameStatus.PAUSED | EGameStatus.OVER | null

// Interfaces
export interface IGridSize {
  rows: number
  cols: number
}
export interface ICell {
  x: number
  y: number
}
