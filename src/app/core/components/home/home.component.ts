import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public cryptocurrency$: Observable<any>

  constructor(private http: HttpClient) {
    this.cryptocurrency$ = this.http.get(`${environment.apiUrl}/cryptocurrency/`)
  }

  ngOnInit() {
    // this.http.get(`${environment.apiUrl}/cryptocurrency/`).subscribe()
  }
}
