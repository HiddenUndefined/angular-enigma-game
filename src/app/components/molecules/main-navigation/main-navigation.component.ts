import { Component, HostBinding } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'eg-molecule-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class OrganismMainNavigationComponent {
  // @Host
  @HostBinding('class') classes = 'd-flex fd-row jc-start ai-center fx-wrap'
}
