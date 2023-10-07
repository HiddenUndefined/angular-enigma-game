import { NgModule } from '@angular/core'
// Spaces
import { GamesPageComponent } from './games.component'
import { RouterLink } from '@angular/router'
import { OrganismGamesNavigationComponent } from '@components/organisms'

@NgModule({
  imports: [
    RouterLink,
    OrganismGamesNavigationComponent
  ],
  declarations: [
    GamesPageComponent
  ]
})
export class GamesPageModule {
}
