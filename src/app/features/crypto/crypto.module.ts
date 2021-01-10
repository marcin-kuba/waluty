import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../../shared/shared.module'
import { CryptoRoutingModule } from './crypto-routing.module'
import { CryptoComponent } from './crypto.component'
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component'
import { CryptoListComponent } from './components/crypto-list/crypto-list.component'


@NgModule({
  declarations: [
    CryptoComponent,
    CryptoListComponent,
    CryptoDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    CryptoRoutingModule,
  ],
  exports: [
    CryptoListComponent,
  ],
})
export class CryptoModule {
}
