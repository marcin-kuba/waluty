import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './core/components/home/home.component'
import { BottomNavigationComponent } from './core/components/bottom-navigation/bottom-navigation.component'
import { NotificationPageComponent } from './core/components/notification-page/notification-page.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomNavigationComponent,
    NotificationPageComponent, // TODO: After creating HeaderComponent move it to declarations of CoreModule
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
