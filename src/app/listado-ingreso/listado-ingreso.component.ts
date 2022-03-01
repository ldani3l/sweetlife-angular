import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-listado-ingreso',
  templateUrl: './listado-ingreso.component.html',
  styleUrls: ['./listado-ingreso.component.css']
})
export class ListadoIngresoComponent implements OnInit {

  @Input() lista: Ingreso
  constructor() { }

  ngOnInit(): void {
  }

}
