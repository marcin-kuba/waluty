import { createAction, props } from '@ngrx/store'
import { CryptoDetailsModel, CryptoModel } from '../model/crypto.model'


export const readCryptoList = createAction('[Crypto/API] Read Crypto List')
export const readCryptoListSuccess = createAction('[Crypto/API] Read Crypto List Success',
  props<{ cryptoList: CryptoModel[] }>())
export const readCryptoListFail = createAction('[Crypto/API] Read Crypto List FAIL')

export const readCryptoDetails = createAction('[Crypto/API] Read Crypto Details',
  props<{ cryptoSymbol: string }>())
export const readCryptoDetailsSuccess = createAction('[Crypto/API] Read Crypto Details Success',
  props<{ cryptoDetails: CryptoDetailsModel }>())
export const readCryptoDetailsFail = createAction('[Crypto/API] Read Crypto Details FAIL')
