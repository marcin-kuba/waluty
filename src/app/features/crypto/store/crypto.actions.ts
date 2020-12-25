import { createAction, props } from '@ngrx/store'
import { CryptoModel } from '../model/crypto.model'


export const readCryptoList = createAction('[Crypto/API] Read Crypto List')
export const readCryptoListSuccess = createAction('[Crypto/API] Read Crypto List Success', props<{ cryptoList: CryptoModel[] }>())
export const readCryptoListFail = createAction('[Crypto/API] Read Crypto List FAIL')
