import { ActionReducerMap } from '@ngrx/store'
import { AppState } from './app-store.state'
import { sharedReducer } from '../../shared/store/shared.reducer'
import { cryptoReducer } from '../../features/crypto/store/crypto.reducer'


export const appReducers: ActionReducerMap<AppState> = {
  shared: sharedReducer,
  crypto: cryptoReducer,
}
