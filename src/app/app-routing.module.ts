import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './core/components/home/home.component'
import { NotificationPageComponent, NotificationPageData } from './core/components/notification-page/notification-page.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotificationPageComponent,
    data: ({
      type: 'error',
      title: 'Page not found',
      heading: '404',
      description: 'This is not the page you are looking for.',
    } as NotificationPageData),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
