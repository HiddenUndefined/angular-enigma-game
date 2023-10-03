import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Layouts
import { GamesLayoutComponent } from '@layouts/games'
import { WebsiteLayoutComponent } from '@layouts/website'
import { NotFoundLayoutComponent } from '@layouts/not-found'
import { GameLayoutComponent } from '@layouts/game'
// Pages
import { NotFoundPageComponent } from '@pages/not-found'
// Routes
// import gameRouting from '@pages/game/game.routing'

/**
 * App routing
 */
const routes: Routes = [
  // Games pages
  {
    path: 'games',
    component: GamesLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/games').then(m => m.GamesPageRouting)
      }
    ]
  },
  // Game pages
  // ...gameRouting,
  {
    path: 'game',
    component: GameLayoutComponent,
    children: [
      {
        path: 'quick-draw',
        loadChildren: () => import('@pages/game/quick-draw').then(m => m.QuickDrawPageRouting)
      },
      {
        path: 'tic-tac-toe',
        loadChildren: () => import('@pages/game/tic-tac-toe').then(m => m.TicTacToePageRouting)
      }
    ]
  },
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
        loadChildren: () => import('@pages/home').then(m => m.HomePageModule)
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
