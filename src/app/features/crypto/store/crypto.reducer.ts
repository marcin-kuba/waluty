import { createReducer, on } from '@ngrx/store'
import { initialCryptoState } from './crypto.state'
import { readCryptoDetailsSuccess, readCryptoListSuccess } from './crypto.actions'


export const cryptoReducer = createReducer(
  initialCryptoState,
  on(readCryptoListSuccess, (state, {cryptoList}) => ({...state, cryptoList})),
  on(readCryptoDetailsSuccess, (state, {cryptoDetails}) => ({...state, selectedCryptoDetails: cryptoDetails})),
)
