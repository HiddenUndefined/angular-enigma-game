import { Component, HostBinding, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AtomAxisBgComponent } from '@components/atoms'

@Component({
  standalone: true,
  imports: [
    RouterLink,
    AtomAxisBgComponent
  ],
  selector: 'eg-organism-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent {
  // @Host
  @HostBinding('class') classes = 'd-flex fd-column ai-center jc-center'

  // @Properties
  @Input() header = 'Block header'
  @Input() description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate non, quisquam veritatis vitae voluptatibus!'
  @Input() linkHref = '#'
  @Input() linkText = 'Link text'
}
