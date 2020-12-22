import { Pipe, PipeTransform } from '@angular/core'
import { CryptoModel } from '../model/crypto.model'

@Pipe({
  name: 'cryptoName',
})
export class CryptoNamePipe implements PipeTransform {

  transform(value: CryptoModel): string {
    let cryptoName = ''

    switch (value.symbol) {
      case 'TRX': cryptoName = 'Tron'; break
      case 'BTC': cryptoName = 'Bitcoin'; break
      case 'ETH': cryptoName = 'Ethereum'; break
      case 'LSK': cryptoName = 'Lisk'; break
      case 'XLM': cryptoName = 'Stellar Lumens'; break
      case 'XRP': cryptoName = 'Ripple'; break
      case 'VRC': cryptoName = 'VeriCoin'; break
      case 'XVC': cryptoName = 'Vcash'; break
    }

    return cryptoName
  }
}
