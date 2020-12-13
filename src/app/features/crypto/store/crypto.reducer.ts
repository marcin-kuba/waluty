import { createReducer, on } from '@ngrx/store'
import { initialCryptoState } from './crypto.state'
import { readCryptoListSuccess } from './crypto.actions'


export const cryptoReducer = createReducer(
  initialCryptoState,
  on(readCryptoListSuccess, (state, {cryptoList}) => ({...state, cryptoList})),
)
