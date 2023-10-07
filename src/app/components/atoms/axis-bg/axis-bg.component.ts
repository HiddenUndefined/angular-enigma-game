import { Component } from '@angular/core'

@Component({
  standalone: true,
  selector: 'eg-atom-axis-bg',
  template: `
    <div class="axis-bg">
      <div class="bg-line"></div>
      <div class="bg-line"></div>
      <div class="bg-line"></div>
      <div class="bg-line"></div>
      <div class="bg-line"></div>
    </div>
  `,
  styleUrls: ['./axis-bg.component.css']
})
export class AtomAxisBgComponent {

}
