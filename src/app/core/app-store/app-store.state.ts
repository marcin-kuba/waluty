import { SharedState } from '../../shared/store/shared.state'
import { CryptoState } from '../../features/crypto/store/crypto.state'


export interface AppState {
  shared: SharedState
  crypto: CryptoState
}
