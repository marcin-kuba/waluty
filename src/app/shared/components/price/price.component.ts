import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {
  public price: number
  public fractionPart: string

  @Input()
  set value(value: number) {
    this.price = Math.floor(value)
    this.fractionPart = (value % 1).toFixed(2).substring(2)
  }
}
