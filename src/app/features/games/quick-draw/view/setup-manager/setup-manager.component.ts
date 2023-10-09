import { Component } from '@angular/core'
import { NgForOf, NgIf } from '@angular/common'
// Global
import { AtomButtonComponent } from '@components/atoms'
import { QuickDrawSetupManagerService } from '@quickDraw/core/setup-manager'
import { QuickDrawCoreService } from '@quickDraw/core'

@Component({
  standalone: true,
  imports: [
    AtomButtonComponent,
    NgForOf,
    NgIf
  ],
  selector: 'eg-quick-draw-setup-manager',
  templateUrl: './setup-manager.component.html',
  styleUrls: ['./setup-manager.component.css']
})
export class SetupManagerComponent {
  // @Constructor
  constructor (
    protected core: QuickDrawCoreService,
    protected manager: QuickDrawSetupManagerService
  ) {}
}
