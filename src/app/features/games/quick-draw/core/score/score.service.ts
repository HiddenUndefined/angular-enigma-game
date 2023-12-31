import { Injectable } from '@angular/core'
// Spaces
import { EPlayerSides, EWinnerSides } from '@quickDraw/core/models/players.model'
import { IScore } from '@quickDraw/core/models/score.model'

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

  public setPointToComputer (point = 1): void {
    this.score[EPlayerSides.COMPUTER] += point
  }
  public setPointToPlayer (point = 1): void {
    this.score[EPlayerSides.PLAYER] += point
  }

  public setWinScore (winScore: number): void {
    this.winScore = winScore
  }

  public getWinner (): EWinnerSides | null {
    if (this.score[EPlayerSides.COMPUTER] >= this.winScore || this.score[EPlayerSides.COMPUTER] > this.score[EPlayerSides.PLAYER]) {
      return EWinnerSides.COMPUTER
    }
    else if (this.score[EPlayerSides.PLAYER] >= this.winScore || this.score[EPlayerSides.PLAYER] > this.score[EPlayerSides.COMPUTER]) {
      return EWinnerSides.PLAYER
    }
    else if (this.score[EPlayerSides.PLAYER] === this.score[EPlayerSides.COMPUTER]) {
      return EWinnerSides.DRAW
    }

    return null
  }

  public checkSomebodyWin (): boolean {
    let hasWinner = false

    if (
      this.score[EPlayerSides.COMPUTER] >= this.winScore
      || this.score[EPlayerSides.PLAYER] >= this.winScore
    ) {
      hasWinner = true
    }

    return hasWinner
  }
}
