import { CryptoModel } from '../model/crypto.model'


export interface CryptoState {
  cryptoList: CryptoModel[]
}

export const initialCryptoState: CryptoState = {
  cryptoList: [],
}
