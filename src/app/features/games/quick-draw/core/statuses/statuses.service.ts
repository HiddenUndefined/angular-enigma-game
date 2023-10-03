import { Injectable } from '@angular/core'
import { EGameStatus, TGameStatus } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class StatusesService {
  // Game status checkers
  get isNotStarted (): boolean {
    return this.status === EGameStatus.NOT_STARTED
  }
  get isStarted (): boolean {
    return this.status === EGameStatus.STARTED
  }
  get isPaused (): boolean {
    return this.status === EGameStatus.PAUSED
  }
  get isOver (): boolean {
    return this.status === EGameStatus.OVER
  }
  // Encapsulated value
  private status: TGameStatus = EGameStatus.NOT_STARTED

  // @Methods
  public setStarted (): void {
    this.setStatus(EGameStatus.STARTED)
  }
  public setPaused (): void {
    this.setStatus(EGameStatus.PAUSED)
  }
  public setOver (): void {
    this.setStatus(EGameStatus.OVER)
  }
  public resetStatus (): void {
    this.setStatus(EGameStatus.NOT_STARTED)
  }

  /**
   * Set game status
   * @param status {TGameStatus} - Game status
   */
  private setStatus (status: TGameStatus): void {
    this.status = status
  }
}
