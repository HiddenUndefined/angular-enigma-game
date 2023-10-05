import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
// Spaces
import { NotFoundLayoutComponent } from './not-found'
import { WebsiteLayoutComponent } from './website'
import { GamesLayoutComponent } from './games'
import { GameLayoutComponent } from '@layouts/game'
import { OrganismHeaderComponent } from '@components/organisms'
import { OrganismGameHeaderComponent } from '@components/organisms/game-header'

@NgModule({
  declarations: [
    NotFoundLayoutComponent,
    WebsiteLayoutComponent,
    GamesLayoutComponent,
    GameLayoutComponent
  ],
  imports: [
    RouterModule,
    OrganismHeaderComponent,
    OrganismGameHeaderComponent
  ]
})
export class LayoutsModule {
}
