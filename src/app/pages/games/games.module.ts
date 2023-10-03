import { NgModule } from '@angular/core'
// Spaces
import { GamesPageComponent } from './games.component'
import { RouterLink } from '@angular/router'

@NgModule({
  imports: [
    RouterLink
  ],
  declarations: [
    GamesPageComponent
  ]
})
export class GamesPageModule {
}
