import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

const CRYPTO_API_ENDPOINT = '/cryptocurrency/'

@Injectable({
  providedIn: 'root',
})
export class CryptoApiService {

  constructor(private http: HttpClient) {
  }

  readCryptoList() {
    return this.http.get(`${environment.baseUrl}${CRYPTO_API_ENDPOINT}`)
  }

  readCryptoDetails(cryptoSymbol: string) {
    return this.http.get(`${environment.baseUrl}${CRYPTO_API_ENDPOINT}${cryptoSymbol}?currency=USD&range=1D`)
  }
}
