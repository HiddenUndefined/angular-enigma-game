import { Component } from '@angular/core'
// Global
import { AtomButtonComponent } from '@components/atoms'
// Spaces
import { QuickDrawCoreService } from '@quickDraw/core/core.service'
import { ControlService } from '@quickDraw/core/control'
import { StatusesService } from '@quickDraw/core/statuses'
import { NgIf } from '@angular/common'

@Component({
  standalone: true,
  imports: [
    AtomButtonComponent,
    NgIf
  ],
  selector: 'eg-quick-draw-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  constructor (
    protected readonly core: QuickDrawCoreService,
    protected status: StatusesService,
    protected control: ControlService
  ) {
  }
}
