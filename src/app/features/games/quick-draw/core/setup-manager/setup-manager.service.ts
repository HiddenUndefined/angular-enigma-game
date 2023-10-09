import { Injectable } from '@angular/core'
// Global
import { IGameSetup, TGameSetups } from '@quickDraw/core/models/setup.model'

@Injectable({
  providedIn: 'root'
})
export class SetupManagerService {
  // @Properties

  private setups: TGameSetups = [
    {
      title: 'Easy',
      description: 'This is easy mode: 5x5 grid, 10 sec for round, 5 extra lives. You need 3 points to win.',
      extraLiveCount: 5,
      gridSize: {
        rows: 5,
        cols: 5
      },
      round: {
        activationCellsCount: 3,
        timerDuration: 10,
        winScore: 2
      }
    },
    {
      title: 'Medium',
      description: 'This is medium mode: 8x8 grid, 8 sec for round, 3 extra lives. You need 6 points to win.',
      extraLiveCount: 3,
      gridSize: {
        rows: 8,
        cols: 8
      },
      round: {
        activationCellsCount: 5,
        timerDuration: 8,
        winScore: 6
      },
    },
    {
      title: 'Hard',
      description: 'This is hard mode: 10x10 grid, 6 sec for round, 1 extra lives. You need 10 points to win.',
      extraLiveCount: 1,
      gridSize: {
        rows: 10,
        cols: 10
      },
      round: {
        activationCellsCount: 7,
        timerDuration: 6,
        winScore: 10
      }
    }
  ]
  public get getAllSetups (): TGameSetups {
    return this.setups
  }

  private currentSetupIndex = 0
  public get getCurrentSetupIndex (): number {
    return this.currentSetupIndex
  }
  public get getCurrentSetup (): IGameSetup {
    return this.setups[this.currentSetupIndex]
  }

  // @Methods

  public setCurrentSetupIndex (index: number) {
    if (index >= 0 && index < this.setups.length) {
      this.currentSetupIndex = index
    }
    else {
      throw new Error('Setup index is out of range')
    }
  }
}
