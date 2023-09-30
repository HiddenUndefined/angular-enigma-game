import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
// Spaces
import { NotFoundLayoutComponent } from './not-found'
import { WebsiteLayoutComponent } from './website'
import { GamesLayoutComponent } from './games'

@NgModule({
  declarations: [
    NotFoundLayoutComponent,
    WebsiteLayoutComponent,
    GamesLayoutComponent
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
