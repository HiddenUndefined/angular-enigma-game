import { Component } from '@angular/core'
import { NgClass, NgForOf, NgIf } from '@angular/common'
// Global
import { ButtonComponent } from '@components/atoms'
// Spaces
import { GridAreaService } from '../../core/grid-area'


@Component({
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    ButtonComponent,
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
