import { Component, HostBinding, OnInit } from '@angular/core'
// Spaces
import { QuickDrawCoreService } from '@quickDraw/core//core.service'
import { GameAreaComponent } from '@quickDraw/view/game-area'
import { ControlComponent } from '@quickDraw/view/control'
import { ScoreComponent } from '@quickDraw/view/score'

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
  // @Host
  @HostBinding('class') readonly classes = 'd-flex fd-column ai-center jc-center'

  // @Constructor
  constructor (
    protected readonly core: QuickDrawCoreService
  ) {
  }

  ngOnInit (): void {
    this.core.initGame()
  }

}
