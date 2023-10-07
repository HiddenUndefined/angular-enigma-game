import { Component, HostBinding } from '@angular/core'

@Component({
  selector: 'eg-home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomePageComponent {
  // @Host
  @HostBinding('class') classes = 'd-flex fd-column ai-stretch jc-start'
}
