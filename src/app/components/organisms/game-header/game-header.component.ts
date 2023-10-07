import { Component, HostBinding } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ArrowIconComponent } from '@components/atoms/svg-icons/icons/arrow.component'

@Component({
  standalone: true,
  imports: [
    RouterLink,
    ArrowIconComponent
  ],
  selector: 'eg-organism-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})
export class OrganismGameHeaderComponent {
  // @Host
  @HostBinding('class') classes = 'd-flex jc-center ai-c'
}
