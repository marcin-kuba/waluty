import { AfterViewInit, Component } from '@angular/core'
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
    let someDay = new Date('2021-01-28')
    someDay.setTime(someDay.getTime() + (2*60*60*1000))

    console.log(someDay.toISOString())
    route.params.subscribe(params => this.cryptoSymbol = params.cryptoSymbol)
    this.cryptoDetails$ = store.pipe(select(selectCryptoDetails), filter(i => i && i.symbol === this.cryptoSymbol))
    store.dispatch(readCryptoDetails({cryptoSymbol: this.cryptoSymbol}))
  }
}
