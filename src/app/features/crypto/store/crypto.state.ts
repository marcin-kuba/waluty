import { CryptoListItemModel } from '../model/crypto.model'


export interface CryptoState {
  cryptoList: CryptoListItemModel[]
}

export const initialCryptoState: CryptoState = {
  cryptoList: [],
}
