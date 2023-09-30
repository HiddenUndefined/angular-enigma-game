import { NgModule } from '@angular/core'
// Spaces
import { GamesPageComponent } from './games.component'
import { GamesPageRouting } from './games.routing'

@NgModule({
  declarations: [
    GamesPageComponent
  ],
  imports: [
    GamesPageRouting
  ]
})
export class GamesPageModule {
}
