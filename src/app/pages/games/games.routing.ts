import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Spaces
import { GamesPageComponent } from './games.component'

const routes: Routes = [
  {
    path: '',
    component: GamesPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesPageRouting {
}
