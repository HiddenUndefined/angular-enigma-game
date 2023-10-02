import { Component, OnInit } from '@angular/core'
import { NgClass, NgForOf, NgIf } from '@angular/common'
import { ButtonComponent } from '@components/atoms'
import { QuickDrawCoreService } from '@features/games/quick-draw/core/core.service'


@Component({
  standalone: true,
  selector: 'eg-quick-draw-game-area',
  templateUrl: './game-area.component.html',
  imports: [
    NgForOf,
    NgClass,
    ButtonComponent,
    NgIf
  ],
  styleUrls: ['./game-area.component.css']
})
export class GameAreaComponent implements OnInit {
  constructor (
    protected gameCore: QuickDrawCoreService
  ) {
  }

  // @Lifecycle
  ngOnInit (): void {
    this.gameCore.generateGrid()
  }
}
