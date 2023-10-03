import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
// Global
import { ComingSoonComponent } from '@features/games/coming-soon'
// Spaces
import { TicTacToePageComponent } from './tic-tac-toe.component'

@NgModule({
  declarations: [
    TicTacToePageComponent
  ],
  imports: [
    RouterLink,
    ComingSoonComponent
  ]
})
export class TicTacToePageModule {
}
