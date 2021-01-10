import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
  name: 'cryptoName',
})
export class CryptoNamePipe implements PipeTransform {

  transform(symbol: string): string {
    switch (symbol) {
      case 'TRX': return 'Tron'
      case 'BTC': return  'Bitcoin'
      case 'ETH': return 'Ethereum'
      case 'LSK': return 'Lisk'
      case 'XLM': return 'Stellar Lumens'
      case 'XRP': return 'Ripple'
      case 'VRC': return 'VeriCoin'
      case 'XVC': return 'Vcash'
      default: return symbol
    }
  }
}
