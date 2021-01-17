import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { CryptoDetailsModel } from '../../model/crypto.model'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { selectCryptoDetails } from '../../store/crypto.selectors'
import { readCryptoDetails } from '../../store/crypto.actions'
import { filter } from 'rxjs/operators'


@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss'],
})
export class CryptoDetailsComponent {
  public cryptoSymbol: string
  public cryptoDetails$: Observable<CryptoDetailsModel>

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    route.params.subscribe(params => this.cryptoSymbol = params.cryptoSymbol)
    this.cryptoDetails$ = store.pipe(select(selectCryptoDetails), filter(i => i && i.symbol === this.cryptoSymbol))
    store.dispatch(readCryptoDetails({cryptoSymbol: this.cryptoSymbol}))
  }
}
