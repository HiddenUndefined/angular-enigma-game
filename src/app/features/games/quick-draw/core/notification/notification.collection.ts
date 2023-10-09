import { ENotificationButtonType } from '@quickDraw/core/models/notification.model'

export const initGameNotification = {
  title: 'Quick draw',
  message: 'Click on the blue cells as fast as you can!',
  button: {
    type: ENotificationButtonType.START,
    text: 'Start game'
  }
}

export const pauseGameNotification = {
  title: 'Game paused',
  message: 'Do you want to continue?',
  button: {
    type: ENotificationButtonType.CONTINUE,
    text: 'Continue'
  }
}

export const playerWinNotification = {
  title: 'You win',
  message: 'Congratulations on your victory :)',
  button: {
    type: ENotificationButtonType.RESET,
    text: 'Play again'
  }
}

export const computerWinNotification = {
  title: 'Game over',
  message: 'Don\'t give up, try again :)',
  button: {
    type: ENotificationButtonType.RESET,
    text: 'Try again'
  }
}

export const drawNotification = {
  title: 'Draw',
  message: 'You are both strong :)',
  button: {
    type: ENotificationButtonType.RESET,
    text: 'Try again'
  }
}
