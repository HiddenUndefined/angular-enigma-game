import { Component, HostBinding } from '@angular/core'
import { NgIf } from '@angular/common'
// Global
import { AtomButtonComponent } from '@components/atoms'
// Spaces
import { QuickDrawCoreService } from '@quickDraw/core/core.service'
import { NotificationService } from '@quickDraw/core/notification'
import { GameAreaComponent } from '@quickDraw/view/game-area'
import { ControlComponent } from '@quickDraw/view/control'
import { ScoreComponent } from '@quickDraw/view/score'
import { NotificationComponent } from '@quickDraw/view/notification'
import { SetupManagerComponent } from '@quickDraw/view/setup-manager'

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
export class QuickDrawComponent {
  // @Host
  @HostBinding('class') readonly classes: string = 'd-flex fd-column ai-center jc-center'

  // @Constructor
  constructor (
    protected readonly notification: NotificationService,
    protected readonly core: QuickDrawCoreService
  ) {
  }

}
