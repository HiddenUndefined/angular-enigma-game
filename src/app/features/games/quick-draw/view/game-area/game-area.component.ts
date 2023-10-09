import { Component } from '@angular/core'
import { NgClass, NgForOf, NgIf } from '@angular/common'
// Global
import { AtomButtonComponent } from '@components/atoms'
// Spaces
// # Models
import { IGridCellPosition } from '@quickDraw/core/models/game-area.model'
// # Core
import { GridAreaService } from '@quickDraw/core/grid-area'
import { StatusesService } from '@quickDraw/core/statuses'


@Component({
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    AtomButtonComponent,
    NgIf
  ],
  selector: 'eg-quick-draw-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.css']
})
export class GameAreaComponent {
  // @Constructor
  constructor (
    protected statusService: StatusesService,
    protected areaService: GridAreaService
  ) {
  }

  // @Methods
  public selectCell (position: IGridCellPosition): void {
    if (this.areaService.isValidCellStatusForInteraction(position)) {
      this.areaService.playerSelectCell(position)
    }
  }

  public getDisabledCellStatus (): boolean {
    return !this.statusService.isStarted
  }
}
