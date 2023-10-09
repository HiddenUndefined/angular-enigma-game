// Enums
export enum EGameStatus {
  NOT_STARTED = 'not_started',
  READY = 'ready_to_start',
  STARTED = 'started',
  PAUSED = 'paused',
  OVER = 'over'
}

// Types
export type TGameStatus = EGameStatus.NOT_STARTED | EGameStatus.READY | EGameStatus.STARTED | EGameStatus.PAUSED | EGameStatus.OVER
