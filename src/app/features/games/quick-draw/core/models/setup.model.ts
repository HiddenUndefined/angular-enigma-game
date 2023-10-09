export interface IRoundSetup {
  activationCellsCount: number
  timerDuration: number // sec
  winScore: number
}

export interface IGridSetup {
  rows: number
  cols: number
}

export interface IGameSetup {
  title: string
  description: string
  extraLiveCount: number
  round: IRoundSetup
  gridSize: IGridSetup
}

export type TGameSetups = IGameSetup[]
