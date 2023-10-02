// Enums
export enum EGridCellStatus {
  ACTIVE = 'active',
  WIN = 'win',
  LOSE = 'lose'
}
export enum EGameStatus {
  NOT_STARTED = 'not_started',
  STARTED = 'started',
  PAUSED = 'paused',
  OVER = 'over'
}
export enum EPlayerSides {
  COMPUTER = 'computer',
  PLAYER = 'player'
}
export enum EPlayerStatuses {
  ACTIVE = 'active',
  WIN = 'win',
  LOSE = 'lose'
}

// Types
export type TGridCellStatus = EGridCellStatus.ACTIVE | EGridCellStatus.WIN | EGridCellStatus.LOSE | null
export type TGameStatus = EGameStatus.NOT_STARTED | EGameStatus.STARTED | EGameStatus.PAUSED | EGameStatus.OVER
export type TPlayerSide = EPlayerSides.COMPUTER | EPlayerSides.PLAYER
export type TPlayerStatus = EPlayerStatuses.ACTIVE | EPlayerStatuses.WIN | EPlayerStatuses.LOSE

// Interfaces
export interface IGridSize {
  rows: number
  cols: number
}
export interface ICell {
  x: number
  y: number
}
export interface IScore {
  [EPlayerSides.COMPUTER]: number
  [EPlayerSides.PLAYER]: number
}
