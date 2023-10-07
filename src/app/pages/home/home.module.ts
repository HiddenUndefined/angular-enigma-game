import { NgModule } from '@angular/core'
// Spaces
import { HomePageComponent } from './home.component'
import { HomePageRouting } from './home.routing'
import { PresentComponent } from '@components/organisms'

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRouting,
    PresentComponent
  ]
})
export class HomePageModule {
}
