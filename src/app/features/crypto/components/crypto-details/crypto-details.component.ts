import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss'],
})
export class CryptoDetailsComponent {
  public cryptoSymbol: string

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => this.cryptoSymbol = params.cryptoSymbol)
  }
}
