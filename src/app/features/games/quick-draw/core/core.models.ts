// Enums
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
export enum EWinnerSides {
  COMPUTER = EPlayerSides.COMPUTER,
  PLAYER = EPlayerSides.PLAYER,
  BOTH = 'both'
}
export enum EPlayerStatuses {
  ACTIVE = 'active',
  WAITING = 'waiting',
  WIN = 'win',
  LOSE = 'lose'
}

// Types
export type TGameStatus = EGameStatus.NOT_STARTED | EGameStatus.STARTED | EGameStatus.PAUSED | EGameStatus.OVER
export type TPlayerSide = EPlayerSides.COMPUTER | EPlayerSides.PLAYER | null
export type TPlayerStatus = EPlayerStatuses.ACTIVE | EPlayerStatuses.WAITING | EPlayerStatuses.WIN | EPlayerStatuses.LOSE

// Interfaces
export interface IScore {
  [EPlayerSides.COMPUTER]: number
  [EPlayerSides.PLAYER]: number
}
