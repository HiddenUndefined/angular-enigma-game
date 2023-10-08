import { Component, HostBinding } from '@angular/core'
import { AtomButtonComponent } from '@components/atoms'
import { NotificationService } from '@quickDraw/core/notification'
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common'
import { QuickDrawCoreService } from '@quickDraw/core'

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
