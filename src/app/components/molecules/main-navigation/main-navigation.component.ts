import { Component, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'eg-molecule-main-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class OrganismMainNavigationComponent {
  // @Host
  @HostBinding('class') classes = 'd-flex fd-row jc-start ai-center fx-wrap'
}
