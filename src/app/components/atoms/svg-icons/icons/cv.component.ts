import { Component } from '@angular/core'

@Component({
  standalone: true,
  selector: 'eg-icon-cv',
  template: `
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)">
        <path d="M339 2277 c-18 -12 -44 -38 -56 -56 l-23 -34 0 -907 0 -907 23 -34 c12 -18 38 -44 56 -56 l34 -23 907 0 907 0 34 23 c18 12 44 38 56 56 l23 34 0 907 0 907 -23 34 c-12 18 -38 44 -56 56 l-34 23 -907 0 -907 0 -34 -23z m725 -435 c72 -39 126 -121 126 -192 l0 -30 -85 0 c-76 0 -85 2 -85 18 0 22 -36 57 -66 66 -12 4 -34 1 -49 -6 -49 -22 -55 -50 -55 -248 0 -226 9 -250 93 -250 35 0 77 34 77 62 0 16 9 18 85 18 l85 0 0 -32 c-1 -66 -64 -159 -131 -193 -123 -64 -274 -18 -343 105 l-31 55 -3 202 c-2 126 1 222 8 256 35 170 219 253 374 169z m451 -202 c33 -132 62 -236 66 -232 3 4 32 112 64 240 l57 232 84 0 c73 0 84 -2 84 -17 0 -10 -47 -202 -103 -428 l-103 -410 -85 0 -84 0 -101 400 c-55 220 -104 412 -107 428 l-7 27 88 0 88 0 59 -240z m365 -875 l0 -85 -600 0 -600 0 0 85 0 85 600 0 600 0 0 -85z"/>
      </g>
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
export class CvIconComponent {
}