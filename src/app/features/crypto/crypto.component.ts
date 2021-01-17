import { Component } from '@angular/core'
import { routeAnimation } from '../../core/animations/route.animation'


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  animations: [routeAnimation],
})
export class CryptoComponent {
}
