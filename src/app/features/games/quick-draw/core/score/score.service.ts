import { Injectable } from '@angular/core'
// Spaces
import { EPlayerSides, EWinnerSides, IScore } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  // @Properties
  // Win condition
  private winScore = 10

  // Score getters
  public get getComputerScore (): number {
    return this.score[EPlayerSides.COMPUTER]
  }
  public get getPlayerScore (): number {
    return this.score[EPlayerSides.PLAYER]
  }
  private score: IScore = {
    [EPlayerSides.COMPUTER]: 0,
    [EPlayerSides.PLAYER]: 0
  }

  // @Methods
  public resetScore (): void {
    this.score[EPlayerSides.COMPUTER] = 0
    this.score[EPlayerSides.PLAYER] = 0
  }

  public setPointToComputer (): void {
    this.score[EPlayerSides.COMPUTER]++
  }
  public setPointToPlayer (): void {
    this.score[EPlayerSides.PLAYER]++
  }

  public setWinScore (winScore: number): void {
    this.winScore = winScore
  }

  public getWinner (): EWinnerSides | null {
    if (this.score[EPlayerSides.COMPUTER] >= this.winScore) {
      return EWinnerSides.COMPUTER
    }
    else if (this.score[EPlayerSides.PLAYER] >= this.winScore) {
      return EWinnerSides.PLAYER
    }

    return null
  }

  public checkIsDrawWinner (): boolean {
    return this.score[EPlayerSides.PLAYER] === this.score[EPlayerSides.COMPUTER]
  }
}
