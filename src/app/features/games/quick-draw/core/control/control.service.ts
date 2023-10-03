import { Injectable } from '@angular/core'
// Spaces
import { EPlayerSides, EPlayerStatuses, TPlayerSide, TPlayerStatus } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  /**
   * Timer ID for random select free cell in the grid and it's current value
   */
  counterTimerDuration = 5000 // ms
  counterTimerId!: number
  counterTimerValue!: number

  // Move side
  public get isComputerMove (): boolean {
    return this.moveSide === EPlayerSides.COMPUTER
  }
  public get isPlayerMove (): boolean {
    return this.moveSide === EPlayerSides.PLAYER
  }
  private moveSide: TPlayerSide = null

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

  public resetCounterTimer (): void {
    // Clear timer if exists
    clearTimeout(this.counterTimerId)
    // Clear timer value
    this.setTimerValue()
  }

  public stopCounterTimer (): void {
    // Clear timer if exists
    clearTimeout(this.counterTimerId)
  }

  public createCounterTimer (): void {
    // Clear timer if exists
    if (this.counterTimerId) {
      clearTimeout(this.counterTimerId)
    }

    // Set timer value (in seconds) if not exists
    if (!this.counterTimerValue) {
      this.setTimerValue()
    }

    // Create timer with 1 sec delay
    this.counterTimerId = setTimeout(() => {

      if (this.counterTimerValue > 0) {
        this.counterTimerValue -= 1
        this.createCounterTimer()
      }

      console.log(this.counterTimerValue)
    }, 1000)
  }

  private setTimerValue (): void {
    this.counterTimerValue = this.counterTimerDuration / 1000
  }
}
