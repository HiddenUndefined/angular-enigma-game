// Enums
export enum EPlayerSides {
  COMPUTER = 'computer',
  PLAYER = 'player'
}
export enum EWinnerSides {
  COMPUTER = EPlayerSides.COMPUTER,
  PLAYER = EPlayerSides.PLAYER,
  DRAW = 'draw'
}
export enum EPlayerStatuses {
  ACTIVE = 'active',
  WAITING = 'waiting',
  WIN = 'win',
  LOSE = 'lose'
}

// Types
export type TPlayerSide = EPlayerSides.COMPUTER | EPlayerSides.PLAYER | null
export type TPlayerStatus = EPlayerStatuses.ACTIVE | EPlayerStatuses.WAITING | EPlayerStatuses.WIN | EPlayerStatuses.LOSE
