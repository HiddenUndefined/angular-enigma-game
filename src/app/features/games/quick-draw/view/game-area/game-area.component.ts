import { Component } from '@angular/core'
import { NgClass, NgForOf, NgIf } from '@angular/common'
// Global
import { AtomButtonComponent } from '@components/atoms'
// Spaces
// # Models
import { ICell } from '@quickDraw/core/core.models'
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
  constructor (
    protected statusService: StatusesService,
    protected areaService: GridAreaService
  ) {
  }

  // @Methods
  public selectCell (position: ICell): void {
    if (this.areaService.isValidCellStatusForInteraction(position)) {
      this.areaService.playerSelectCell(position)
    }
  }

  public getDisabledCellStatus (position: ICell): boolean {
    return !this.statusService.isStarted
  }
}
