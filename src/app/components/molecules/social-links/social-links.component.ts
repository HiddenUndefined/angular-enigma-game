import { Component, HostBinding } from '@angular/core'
// Global
import { environment } from '@env/environment'
import {
  CvIconComponent,
  DjinniIconComponent,
  GithubIconComponent,
  LinkedinIconComponent
} from '@components/atoms/svg-icons'

@Component({
  standalone: true,
  imports: [
    CvIconComponent,
    DjinniIconComponent,
    GithubIconComponent,
    LinkedinIconComponent
  ],
  selector: 'eg-molecule-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent {
  // @Host
  @HostBinding('class') class = 'd-flex fd-row jc-start ai-center fx-wrap'

  // @Properties
  protected readonly env = environment
}
