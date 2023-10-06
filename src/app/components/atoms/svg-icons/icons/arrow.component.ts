import { Component } from '@angular/core'

@Component({
  standalone: true,
  selector: 'eg-icon-arrow',
  template: `
    <svg width="24" height="24" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
    </svg>
  `,
  styles: [
    `
      :host {
        fill: var(--color-white);
        transition: fill 0.2s ease-in-out;
        &:hover {
          fill: var(--color-primary);
        }
      }
    `
  ]
})
export class ArrowIconComponent {}