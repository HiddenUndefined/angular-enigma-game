import { Component, HostBinding } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
// Global
import { environment } from '@env/environment'
import { CvIconComponent, GithubIconComponent, DjinniIconComponent, LinkedinIconComponent } from '@components/atoms/svg-icons'

@Component({
  standalone: true,
  imports: [
    GithubIconComponent,
    LinkedinIconComponent,
    DjinniIconComponent,
    CvIconComponent,
    RouterLinkActive,
    RouterLink
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
