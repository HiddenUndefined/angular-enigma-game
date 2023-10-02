import { Component, OnInit } from '@angular/core'
// Spaces
import { QuickDrawCoreService } from './core/core.service'
import { GameAreaComponent } from './view/game-area/game-area.component'
import { ControlComponent } from './view/control/control.component'
import { ScoreComponent } from './view/score/score.component'

@Component({
  standalone: true,
  providers: [
    QuickDrawCoreService
  ],
  imports: [
    GameAreaComponent,
    ControlComponent,
    ScoreComponent
  ],
  selector: 'eg-game-quick-draw-feature',
  templateUrl: './quick-draw.component.html',
  styleUrls: ['./quick-draw.component.css']
})
export class QuickDrawComponent implements OnInit {
  constructor (
    protected readonly core: QuickDrawCoreService
  ) {
  }

  ngOnInit (): void {
    this.core.initGame()
  }

}
