import { NgModule } from '@angular/core'
// Spaces
import { NotFoundPageModule } from '@pages/not-found'
import { HomePageModule } from '@pages/home'
import { GamesPageModule } from '@pages/games'

@NgModule({
  exports: [
    NotFoundPageModule,
    HomePageModule,
    GamesPageModule
  ]
})
export class PagesModule {
}
