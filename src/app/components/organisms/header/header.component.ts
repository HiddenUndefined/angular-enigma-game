import { Component } from '@angular/core'
// Global
import { environment } from '@env/environment'
import { CvIconComponent, GithubIconComponent, DjinniIconComponent, LinkedinIconComponent } from '@components/atoms/svg-icons'
import { RouterLink, RouterLinkActive } from '@angular/router'

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
  // @Properties
  env = environment
}
