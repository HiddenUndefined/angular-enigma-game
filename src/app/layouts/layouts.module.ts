import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
// Spaces
import { NotFoundLayoutComponent } from './not-found'
import { WebsiteLayoutComponent } from './website'
import { GamesLayoutComponent } from './games'
import { GameLayoutComponent } from '@layouts/game'
import { HeaderComponent } from '@components/organisms'

@NgModule({
  declarations: [
    NotFoundLayoutComponent,
    WebsiteLayoutComponent,
    GamesLayoutComponent,
    GameLayoutComponent
  ],
  imports: [
    RouterModule,
    HeaderComponent
  ]
})
export class LayoutsModule {
}
