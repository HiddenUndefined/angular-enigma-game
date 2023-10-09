import { Component, HostBinding, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIf } from '@angular/common'
import { AtomButtonComponent } from '@components/atoms'

@Component({
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    AtomButtonComponent
  ],
  selector: 'eg-molecule-game-nav-card',
  templateUrl: './game-nav-card.component.html',
  styleUrls: ['./game-nav-card.component.css']
})
export class MoleculeGameNavCardComponent {
  // @Host
  @HostBinding('class') readonly classes: string = 'd-flex fd-column jc-start ai-start'
  @HostBinding('style.background-image') get backgroundImage(): string {
    return `url(${ this.backgroundImageUrl })`
  }

  // @Properties
  @Input() header!: string
  @Input() description!: string
  @Input() backgroundImageUrl!: string
  @Input() link?: string
  @Input() linkText?: string
  @Input() isComingSoon?: boolean
}
