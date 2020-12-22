import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { CryptoApiService } from '../service/crypto-api.service'
import { HttpResponseModel } from '../../../shared/models/http-response-model.model'
import { CryptoModel } from '../model/crypto.model'
import { readCryptoList, readCryptoListSuccess, readCryptoListFail } from './crypto.actions'


@Injectable()
export class CryptoEffects {

  constructor(private readonly actions$: Actions, private apiService: CryptoApiService) {
  }

  readCryptoList$ = createEffect(() => this.actions$.pipe(
    ofType(readCryptoList.type),
    switchMap(() => this.apiService.readCryptoList().pipe(
      map((response: HttpResponseModel<CryptoModel[]>) => ({
        type: readCryptoListSuccess.type,
        cryptoList: response.data,
      })),
      catchError(() => of({type: readCryptoListFail.type})),
    )),
  ))
}
