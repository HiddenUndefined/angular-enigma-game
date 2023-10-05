import { Component, HostBinding } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
// Global
import { environment } from '@env/environment'
import { MoleculeSocialLinksComponent } from '@components/molecules/social-links/social-links.component'
import { OrganismMainNavigationComponent } from '@components/molecules/main-navigation'

@Component({
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    MoleculeSocialLinksComponent,
    OrganismMainNavigationComponent
  ],
  selector: 'eg-organism-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class OrganismHeaderComponent {
  // @Host
  @HostBinding('class') class = 'd-flex jc-center'

  // @Properties
  env = environment
}
