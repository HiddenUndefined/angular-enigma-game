import { NgModule } from '@angular/core'
// Spaces
import { HomePageComponent } from './home.component'
import { HomePageRouting } from './home.routing'

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRouting
  ]
})
export class HomePageModule {
}
