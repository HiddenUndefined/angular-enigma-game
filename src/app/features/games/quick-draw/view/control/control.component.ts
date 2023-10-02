import { Component } from '@angular/core'
import { NgIf } from '@angular/common'
// Global
import { ButtonComponent } from '@components/atoms'
// Spaces
import { QuickDrawCoreService } from '../../core/core.service'
import { ControlService } from '../../core/control'
import { StatusesService } from '../../core/statuses'

@Component({
  standalone: true,
  imports: [
    ButtonComponent,
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
