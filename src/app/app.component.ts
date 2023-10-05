import { Component } from '@angular/core';

@Component({
  selector: 'eg-root',
  template: `
    <router-outlet />
  `,
  styles: [
    `
      nav {
        gap: 12px;
        margin: 0 auto;
        padding: 12px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > a {
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          color: var(--color-light);
          transition: all 0.3s ease-in-out;
          &.active,
          &:hover {
            color: var(--color-primary);
          }
          &.active {
            text-decoration: underline;
          }
        }
      }
    `
  ]
})
export class AppComponent {
}
