import { Injectable } from '@angular/core'
import { INotification } from '@quickDraw/core/models/notification.model'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // @Properties

  private viewStatus = false
  public get getViewStatus (): boolean {
    return this.viewStatus
  }

  private notification: INotification = {
    title: 'Empty',
    message: 'Empty'
  }
  public get title (): string {
    return this.notification.title
  }
  public get message (): string {
    return this.notification.message
  }
  public get button (): INotification['button'] | undefined {
    return this.notification.button
  }

  // @Methods

  public setViewStatus (value: boolean): void {
    this.viewStatus = value
  }

  public toggleViewStatus (): void {
    this.viewStatus = !this.viewStatus
  }

  public setNotification (notification: INotification): void {
    this.notification = notification
  }
}
