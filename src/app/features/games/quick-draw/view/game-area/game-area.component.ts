import { Component } from '@angular/core'
import { NgClass, NgForOf, NgIf } from '@angular/common'
// Global
import { AtomButtonComponent } from '@components/atoms'
// Spaces
import { GridAreaService } from '@quickDraw/core/grid-area'


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
    protected areaService: GridAreaService
  ) {
  }
}
