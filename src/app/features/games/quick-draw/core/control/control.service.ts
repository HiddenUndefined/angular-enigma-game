import { Injectable } from '@angular/core'
// Spaces
import { EPlayerSides, EPlayerStatuses, TPlayerSide, TPlayerStatus } from '../core.models'

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  // Move side checkers
  public get isComputerMove (): boolean {
    return this.moveSide === EPlayerSides.COMPUTER
  }
  public get isPlayerMove (): boolean {
    return this.moveSide === EPlayerSides.PLAYER
  }
  private moveSide: TPlayerSide = EPlayerSides.COMPUTER

  // Game status getters
  public get getComputerGameStatus (): TPlayerStatus {
    return EPlayerStatuses.WIN
  }
  public get getPlayerGameStatus (): TPlayerStatus {
    return EPlayerStatuses.LOSE
  }

  // @Methods
  public changeMoveSide (): void {
    this.moveSide = this.moveSide === EPlayerSides.COMPUTER ? EPlayerSides.PLAYER : EPlayerSides.COMPUTER
  }
}
