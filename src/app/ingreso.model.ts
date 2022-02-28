export class Ingreso{
  constructor(id:number,cantidad:number,created_at:string){
    this.id = id;
    this.cantidad = cantidad;
    this.created_at = created_at;
  }
  id:number=0;
  cantidad:number=0;
  created_at:string="";
}
