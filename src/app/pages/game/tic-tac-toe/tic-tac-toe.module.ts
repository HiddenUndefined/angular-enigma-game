import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
// Spaces
import { TicTacToePageComponent } from './tic-tac-toe.component'

@NgModule({
  declarations: [
    TicTacToePageComponent
  ],
  imports: [
    RouterLink
  ]
})
export class TicTacToePageModule {
}
