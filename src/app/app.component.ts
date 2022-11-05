import { Component, NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bio-equation';
  resultado: any;
  numberCheck: number = 0;

  exportar(event){
    this.numberCheck = 1
    console.log(this.resultado)
    return this.resultado = event

  }
  }

