import { Component, HostBinding, Input } from '@angular/core'

/**
 * Button types *(only for button color schema)*
 */
type TButtonTypes = 'danger'

@Component({
  selector: 'button[eg-button]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @HostBinding('attr.btn-style') @Input()
  colorType?: TButtonTypes
}
