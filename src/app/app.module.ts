import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { TableroComponent } from './tablero/tablero.component'
import { AppComponent }         from './app.component';
import { MatGridListModule } from '@angular/material'
import { TableroModule } from './tablero/tablero.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TableroModule
  ],
  declarations: [
    AppComponent,
    TableroComponent,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }