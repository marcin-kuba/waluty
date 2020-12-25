export interface CryptoModel {
  symbol: string
  lastupdated: string
  quote: {[currency in CurrencySymbol]: CryptoQuoteModel}
}

export interface CryptoQuoteModel {
  price: number
  percent_change_6h: number
  percent_change_24h: number
  percent_change_7d: number
}

export enum CurrencySymbol {
  USD = 'USD',
  PLN = 'PLN',
  EUR = 'EUR',
}
