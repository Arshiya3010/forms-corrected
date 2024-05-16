import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { Hello2Module } from './modules/hello2/hello2.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Hello2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
