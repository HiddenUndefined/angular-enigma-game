import { Component, HostBinding } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
// Global
import { environment } from '@env/environment'
import { SocialLinksComponent } from '@components/molecules/social-links/social-links.component'

@Component({
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    SocialLinksComponent
  ],
  selector: 'eg-organism-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Host
  @HostBinding('class') class = 'd-flex jc-center'

  // @Properties
  env = environment
}
