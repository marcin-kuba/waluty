import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotificationPageComponent, NotificationPageData } from './core/components/notification-page/notification-page.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
