import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-ver-horas',
  templateUrl: './ver-horas.component.html',
  styleUrls: ['./ver-horas.component.css']
})
export class VerHorasComponent implements OnInit {
  info: Ingreso[] = []

  constructor(
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.http.get("http://localhost/sweetlife/public/api/V1/ingresos-24")
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
    this.total = cant;
  }
  total:number=0;
}
