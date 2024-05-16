import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Hello2RoutingModule } from './hello2-routing.module';
import { Hello2Component } from './hello2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Hello2Component
  ],
  imports: [
    CommonModule,
    Hello2RoutingModule,
    FormsModule
  ],
  exports:[
    Hello2Component
  ]
})
export class Hello2Module { }
