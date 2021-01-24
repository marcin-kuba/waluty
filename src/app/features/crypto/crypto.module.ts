import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../../shared/shared.module'
import { CryptoRoutingModule } from './crypto-routing.module'
import { CryptoComponent } from './crypto.component'
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component'
import { CryptoListComponent } from './components/crypto-list/crypto-list.component'
import { ChartModule } from 'angular2-chartjs'
import { CryptoChartComponent } from './components/crypto-chart/crypto-chart.component'


@NgModule({
  declarations: [
    CryptoComponent,
    CryptoListComponent,
    CryptoDetailsComponent,
    CryptoChartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    CryptoRoutingModule,
    ChartModule,
  ],
  exports: [
    CryptoListComponent,
  ],
})
export class CryptoModule {
}
