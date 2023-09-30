import { NgModule } from '@angular/core'
// Spaces
import { GamePageComponent } from './game.component'
import { GamePageRouting } from './game.routing'

@NgModule({
  declarations: [
    GamePageComponent
  ],
  imports: [
    GamePageRouting
  ]
})
export class GamePageModule {
}
