import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingreso } from '../ingreso.model';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'SweetLife';
  info: Ingreso[] = []

  constructor(
    private http: HttpClient
  ) {}

  agregar(){
    let fecha = new Date();
    let can = 0;
    if(this._cantidad == 0 || this._cantidad == null)
      can = 1;
    else
      can = this._cantidad;
    let nuevoIngreso = new Ingreso(this.inc,can, fecha.toString());
    this.info.push(nuevoIngreso);
    this.http.post<Ingreso>('http://localhost/sweetlife/public/api/V1/ingresos', { cantidad: can }).subscribe(data => {
        //this.postId = data.id;
    })
    this.contarSumar()
  }

  ngOnInit(): void {
    this.http.get("http://localhost/sweetlife/public/api/V1/ingresos")
    .subscribe(( datos : any) => {
      this.info = datos;
      this.contarSumar()
    })
  }
  contarSumar(){
    let i = 1;
    let cant = 0;
    this.info.forEach(function(item, index){
      i ++;
      cant = item.cantidad + cant;
      //console.log(cant)
    });
    this.inc = i;
    this.total = cant;
  }
  total:number=0;
  inc:number=0;
  _cantidad:number=0;


}
