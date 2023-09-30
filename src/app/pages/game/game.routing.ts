import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Spaces
import { GamePageComponent } from './game.component'

const routes: Routes = [
  {
    path: '',
    component: GamePageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamePageRouting {
}
