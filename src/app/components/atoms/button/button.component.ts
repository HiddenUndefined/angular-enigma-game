import { Component, HostBinding, Input } from '@angular/core'

/**
 * Button types *(only for button color schema)*
 */
type TButtonTypes = 'secondary' | 'success' | 'info' | 'light' | 'warning' | 'danger'

@Component({
  selector: 'button[eg-button]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class AtomButtonComponent {
  @HostBinding('attr.btn-style') @Input()
  colorType?: TButtonTypes
}
