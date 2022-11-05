import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InsertNumberComponent } from './insert-number/insert-number.component';
import { ResultadoComponent } from './resultado/resultado.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertNumberComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
