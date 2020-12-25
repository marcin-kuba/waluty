import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { CryptoModel } from '../../model/crypto.model'
import { readCryptoList } from '../../store/crypto.actions'
import { selectCryptoList } from '../../store/crypto.selectors'

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss'],
})
export class CryptoListComponent {
  public cryptoList$: Observable<CryptoModel[]>

  constructor(private store: Store<AppState>) {
    this.cryptoList$ = store.pipe(select(selectCryptoList))
    store.dispatch(readCryptoList())
  }
}
