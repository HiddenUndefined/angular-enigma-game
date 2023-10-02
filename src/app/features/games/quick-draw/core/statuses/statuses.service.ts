import { Injectable } from '@angular/core'
import { EGameStatus, TGameStatus } from '@quickDraw/core/core.models'

@Injectable({
  providedIn: 'root'
})
export class StatusesService {
  // Game status checkers
  get status (): TGameStatus {
    return this._status
  }
  get isNotStarted (): boolean {
    return this._status === EGameStatus.NOT_STARTED
  }
  get isStarted (): boolean {
    return this._status === EGameStatus.STARTED
  }
  get isPaused (): boolean {
    return this._status === EGameStatus.PAUSED
  }
  get isOver (): boolean {
    return this._status === EGameStatus.OVER
  }
  // Encapsulated value
  private _status: TGameStatus = EGameStatus.NOT_STARTED

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

  /**
   * Set game status
   * @param status {TGameStatus} - Game status
   */
  private setStatus (status: TGameStatus): void {
    this._status = status
  }
}
