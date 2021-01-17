import { CryptoDetailsModel, CryptoModel } from '../model/crypto.model'


export interface CryptoState {
  cryptoList: CryptoModel[]
  selectedCryptoDetails: CryptoDetailsModel | null
}

export const initialCryptoState: CryptoState = {
  cryptoList: [],
  selectedCryptoDetails: null,
}
