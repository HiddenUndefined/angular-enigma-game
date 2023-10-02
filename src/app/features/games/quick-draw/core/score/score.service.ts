import { Injectable } from '@angular/core'
// Spaces
import { EPlayerSides, IScore } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  // Score getters
  public get getComputerScore (): number {
    return this.score[EPlayerSides.COMPUTER]
  }
  public get getPlayerScore (): number {
    return this.score[EPlayerSides.PLAYER]
  }
  private score: IScore = {
    [EPlayerSides.COMPUTER]: 10,
    [EPlayerSides.PLAYER]: 8
  }
}
