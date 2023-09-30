import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Spaces
import { QuickDrawPageComponent } from './quick-draw.component'

const routes: Routes = [
  {
    path: '',
    component: QuickDrawPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickDrawPageRouting {
}
