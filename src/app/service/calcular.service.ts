import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {
  public resultado={};
  constructor() { }
  public  delta: number;

  calcularEquationSecond(a:number,b:number,c:number){

    this.delta =   (b*b) - (4*a*c);
    let raizA;
    let raizB;

       if (this.delta>0 && a > 0){
          raizA = ((-b + Math.sqrt(this.delta) )/(2*a)).toFixed(4);
          raizB  = ((-b - Math.sqrt(this.delta) )/(2*a)).toFixed(4);
          return this.resultado = {'resultado':`Resultado: ${raizA} e ${raizB}`,'delta':this.delta,'raizA':raizA, 'raizB':raizB
          ,'valorA':a, 'valorB':b,'valorC':c}
       }else if (this.delta==0 && a > 0){
          raizA = (-b + Math.sqrt(this.delta) )/(2*a);
          return this.resultado = {'resultado':`Resultado: ${raizA} e ${raizA}`,'delta':this.delta,'raizA':raizA, 'raizB':raizA
          ,'valorA':a, 'valorB':b,'valorC':c}
        }else{
          return this.resultado = {'resultado':"A equação não possuí raízes reais!",  'delta':this.delta}  ;

        }
  }

  mostrarResultado(){
    return this.resultado;
  }

}
