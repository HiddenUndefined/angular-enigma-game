import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Layouts
import { GameLayoutComponent } from '@layouts/game'
import { WebsiteLayoutComponent } from '@layouts/website'
import { NotFoundLayoutComponent } from '@layouts/not-found'
// Pages
import { NotFoundPageComponent } from '@pages/not-found'

const routes: Routes = [
  // Website pages
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('@pages/home/home.module').then(m => m.HomePageModule)
      }
    ]
  },
  // Dashboard pages
  {
    path: 'game',
    component: GameLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/game/game.module').then(m => m.GamePageModule)
      }
    ]
  },
  // Not found pages
  {
    path: '**',
    component: NotFoundLayoutComponent,
    children: [
      {
        path: '',
        component: NotFoundPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
