import { Injectable } from '@angular/core'
// Spaces
import { EPlayerSides, EPlayerStatuses, TPlayerSide, TPlayerStatus } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  // Move side
  private moveSide: TPlayerSide = EPlayerSides.COMPUTER

  // Game statuses
  public get getComputerGameStatus (): TPlayerStatus {
    return this.computerGameStatus
  }
  private computerGameStatus: TPlayerStatus = EPlayerStatuses.ACTIVE

  public get getPlayerGameStatus (): TPlayerStatus {
    return this.playerGameStatus
  }
  private playerGameStatus: TPlayerStatus = EPlayerStatuses.WAITING

  // @Methods
  public toggleMoveSide (): void {
    switch (this.moveSide) {
      case EPlayerSides.COMPUTER:
        this.moveSide = EPlayerSides.PLAYER
        this.computerGameStatus = EPlayerStatuses.WAITING
        this.playerGameStatus = EPlayerStatuses.ACTIVE
        break
      case EPlayerSides.PLAYER:
        this.moveSide = EPlayerSides.COMPUTER
        this.playerGameStatus = EPlayerStatuses.WAITING
        this.computerGameStatus = EPlayerStatuses.ACTIVE
        break
      default:
        this.moveSide = null
    }
  }
}
