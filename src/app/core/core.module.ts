import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core'
import { CommonModule, registerLocaleData } from '@angular/common'
import localePl from '@angular/common/locales/pl'
import { HttpClientModule } from '@angular/common/http'
import { environment } from '../../environments/environment'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { appReducers } from './app-store/app-store.reducers'
import { appEffects } from './app-store/app-store.effects'

import { ErrorHandlerService } from './services/error-handler.service'
import { httpInterceptorProviders } from './interceptors'
import { ProgressComponent } from './components/progress/progress.component'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressHttpModule } from 'ngx-progressbar/http'
import { DashboardModule } from '../features/dashboard/dashboard.module'
import { CryptoModule } from '../features/crypto/crypto.module'

registerLocaleData(localePl)


@NgModule({
  declarations: [
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),

    // ngProgress
    NgProgressModule.withConfig({spinner: false}),
    NgProgressHttpModule,

    // app
    DashboardModule,
    CryptoModule,
  ],
  providers: [
    ...httpInterceptorProviders,
    {provide: ErrorHandler, useClass: ErrorHandlerService},
    {provide: LOCALE_ID, useValue: 'pl'},
  ],
  exports: [
    ProgressComponent,
  ],
})

export class CoreModule {
}
