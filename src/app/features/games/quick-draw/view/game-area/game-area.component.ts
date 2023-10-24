import { Component, EventEmitter, Output } from '@angular/core'
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
    NgIf,
    NgForOf,
    NgClass,
    AtomButtonComponent
  ],
  selector: 'eg-quick-draw-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.css']
})
export class GameAreaComponent {
  // @Properties
  @Output() public cellClickHandler: EventEmitter<IGridCellPosition> = new EventEmitter<IGridCellPosition>()

  // @Constructor
  constructor (
    protected statusService: StatusesService,
    protected areaService: GridAreaService
  ) {
  }

  // @Methods
  public selectCell (position: IGridCellPosition): void {
    this.cellClickHandler.emit(position)
  }

  public getDisabledCellStatus (): boolean {
    return !this.statusService.isStarted
  }

  protected cellRowTrackBy (index: number): string {
    return `${ index }_row`
  }

  protected cellColTrackBy (index: number): string {
    return `${ index }_col`
  }
}
