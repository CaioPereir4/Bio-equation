
import { CalcularService } from './../service/calcular.service';
import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-insert-number',
  templateUrl: './insert-number.component.html',
  styleUrls: ['./insert-number.component.css']
})
export class InsertNumberComponent{

  @Output() aoCalcular = new EventEmitter<any>();
  @Output() Passos = new EventEmitter<any>();
  valorA:number;
  valorB:number;
  valorC:number;
  resultado:any;
  constructor(private service: CalcularService) { }



  calcular(){
    console.log("passei aq")
   if(this.valorA === undefined|| this.valorB === undefined || this.valorC === undefined){
     alert("Preencha todos os campos")
    } else if(this.valorA === 0 && this.valorB === 0 && this.valorC === 0){
      alert("Campos zerados, digite algum numero")
    }
   else{

    this.service.calcularEquationSecond(this.valorA,this.valorB,this.valorC);
    this.resultado = this.service.mostrarResultado();
    // this.limparCampos();
    this.aoCalcular.emit(this.resultado)
    }
    return this.resultado
  }


  limparCampos(){
    return this.valorA = 0, this.valorB = 0, this.valorC = 0;
  }


}
