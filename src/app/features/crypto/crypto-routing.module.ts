import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CryptoComponent } from './crypto.component'
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component'

const routes: Routes = [
  {
    path: 'crypto',
    component: CryptoComponent,
    children: [
      {
        path: ':cryptoSymbol',
        component: CryptoDetailsComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {
}
