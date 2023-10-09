export interface IRoundSetup {
  count: number
  timerDuration: number
  winScore: number
}

export interface IGridSetup {
  rows: number
  cols: number
}

export interface IGameSetup {
  title: string
  description: string
  round: IRoundSetup
  gridSize: IGridSetup
}

export type TGameSetups = IGameSetup[]
