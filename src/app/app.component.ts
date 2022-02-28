import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'SweetLife';
  info: Ingreso[] = []

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(){
    this.http.get("http://localhost/sweetlife/public/api/V1/ingresos")
    .subscribe(( datos : any) => {
      this.info = datos;
    })
  }
}
