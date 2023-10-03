import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Spaces
import { TicTacToePageComponent } from './tic-tac-toe.component'

const routes: Routes = [
  {
    path: '',
    component: TicTacToePageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToePageRouting {
}
