import { Type } from '@angular/core'
import { SharedEffects } from '../../shared/store/shared.effects'
import { CryptoEffects } from '../../features/crypto/store/crypto.effects'


export const appEffects: Type<any>[] = [
  SharedEffects,
  CryptoEffects,
]
