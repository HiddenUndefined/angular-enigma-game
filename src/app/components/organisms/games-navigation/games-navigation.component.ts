import { Component, HostBinding, Input } from '@angular/core'
import { NgFor } from '@angular/common'
// Global
import { MoleculeGameNavCardComponent } from '@components/molecules/game-nav-card'
// Spaces
import { TGames } from './games-navigation.model'

@Component({
  standalone: true,
  imports: [
    NgFor,
    MoleculeGameNavCardComponent
  ],
  selector: 'eg-organism-games-navigation',
  templateUrl: './games-navigation.component.html',
  styleUrls: ['./games-navigation.component.css']
})
export class OrganismGamesNavigationComponent {
  // @Host
  @HostBinding('class') readonly classes: string = 'd-flex fd-column jc-start ai-center'

  // @Properties
  @Input() games!: TGames
}
