import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
// Spaces
import { QuickDrawPageComponent } from './quick-draw.component'
import { QuickDrawComponent } from '@features/games/quick-draw'

@NgModule({
  imports: [
    RouterLink,
    QuickDrawComponent
  ],
  declarations: [
    QuickDrawPageComponent
  ]
})
export class QuickDrawPageModule {
}
