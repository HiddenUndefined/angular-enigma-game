import { NgModule } from '@angular/core'
// Spaces
import { NotFoundPageModule } from '@pages/not-found'
import { HomePageModule } from '@pages/home'
import { GamePageModule } from '@pages/game'

@NgModule({
  exports: [
    NotFoundPageModule,
    HomePageModule,
    GamePageModule
  ]
})
export class PagesModule {
}
