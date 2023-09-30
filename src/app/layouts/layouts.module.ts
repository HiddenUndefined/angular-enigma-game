import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
// Spaces
import { NotFoundLayoutComponent } from './not-found'
import { WebsiteLayoutComponent } from './website'
import { GameLayoutComponent } from './game'

@NgModule({
  declarations: [
    NotFoundLayoutComponent,
    WebsiteLayoutComponent,
    GameLayoutComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutsModule {
}
