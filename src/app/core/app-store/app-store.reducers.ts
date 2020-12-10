import { ActionReducerMap } from '@ngrx/store'
import { AppState } from './app-store.state'
import { sharedReducer } from '../../shared/store/shared.reducer'


export const appReducers: ActionReducerMap<AppState> = {
  shared: sharedReducer,
}
