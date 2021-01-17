import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CryptoState } from './crypto.state'


export const selectCryptoState = createFeatureSelector<CryptoState>('crypto')

export const selectCryptoList = createSelector(
  selectCryptoState,
  (state: CryptoState) => state.cryptoList,
)

export const selectCryptoDetails = createSelector(
  selectCryptoState,
  (state: CryptoState) => state.selectedCryptoDetails,
)
