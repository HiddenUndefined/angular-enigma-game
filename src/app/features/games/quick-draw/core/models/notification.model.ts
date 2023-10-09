// Enum
export enum ENotificationButtonType {
  RESET = 'reset',
  START = 'start',
  CONTINUE = 'continue'
}

// Type
export type TNotificationButtonType = ENotificationButtonType.RESET | ENotificationButtonType.START | ENotificationButtonType.CONTINUE

// Interface
export interface INotificationButton {
  type: TNotificationButtonType
  text: string
}

export interface INotification {
  title: string
  message: string
  button?: INotificationButton
}
