// Interfaces
import { EPlayerSides } from '@quickDraw/core/models/players.model'

export interface IScore {
  [EPlayerSides.COMPUTER]: number
  [EPlayerSides.PLAYER]: number
}
