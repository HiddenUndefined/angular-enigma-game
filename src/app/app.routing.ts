import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Layouts
import { GamesLayoutComponent } from '@layouts/games'
import { WebsiteLayoutComponent } from '@layouts/website'
import { NotFoundLayoutComponent } from '@layouts/not-found'
// Pages
import { NotFoundPageComponent } from '@pages/not-found'

const routes: Routes = [
  // Game pages
  {
    path: 'games',
    component: GamesLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/games').then(m => m.GamesPageModule)
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
