export interface CryptoListItemModel {
  symbol: CryptoSymbol
  lastupdated: string
  quote: {[currency in CurrencySymbol]: CryptoListCurrencyModel}
}

export interface CryptoListCurrencyModel {
  price: number
  percent_change_6h: number
  percent_change_24h: number
  percent_change_7d: number
}

export enum CryptoSymbol {
  BCC = 'BCC',
  BTC = 'BTC',
  LSK = 'LSK',
  ETH = 'ETH',
}

export enum CurrencySymbol {
  USD = 'USD',
  PLN = 'PLN',
  EUR = 'EUR',
}
