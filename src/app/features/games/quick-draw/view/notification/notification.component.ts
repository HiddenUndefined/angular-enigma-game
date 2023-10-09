import { Component, HostBinding } from '@angular/core'
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common'
// Global
import { AtomButtonComponent } from '@components/atoms'
// Spaces
import { QuickDrawCoreService } from '@quickDraw/core'
import { NotificationService } from '@quickDraw/core/notification'

@Component({
  standalone: true,
  imports: [
    AtomButtonComponent,
    NgIf,
    NgSwitch,
    NgSwitchCase
  ],
  selector: 'eg-quick-draw-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  // @Host
  @HostBinding('class') readonly classes: string = 'd-flex fd-column jc-center ai-center'

  // @Constructor
  constructor (
    protected notification: NotificationService,
    protected core: QuickDrawCoreService
  ) {
  }
}
