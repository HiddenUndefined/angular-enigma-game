import { Component, HostBinding, OnInit } from '@angular/core'
// Spaces
import { QuickDrawCoreService } from '@quickDraw/core//core.service'
import { GameAreaComponent } from '@quickDraw/view/game-area'
import { ControlComponent } from '@quickDraw/view/control'
import { ScoreComponent } from '@quickDraw/view/score'
import { AtomButtonComponent } from '@components/atoms'
import { NotificationComponent } from '@quickDraw/view/notification'
import { NgIf } from '@angular/common'
import { NotificationService } from '@quickDraw/core/notification'
import { SetupManagerComponent } from '@quickDraw/view/setup-manager/setup-manager.component'

@Component({
  standalone: true,
  providers: [
    QuickDrawCoreService
  ],
  imports: [
    GameAreaComponent,
    ControlComponent,
    ScoreComponent,
    AtomButtonComponent,
    NotificationComponent,
    NgIf,
    SetupManagerComponent
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
    protected readonly notification: NotificationService,
    protected readonly core: QuickDrawCoreService
  ) {
  }

  ngOnInit (): void {
    this.core.initGame()
  }

}
