import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GranjasRoutingModule } from './granjas-routing.module';
import { GranjasPesquisaComponent } from './granjas-pesquisa/granjas-pesquisa.component';


@NgModule({
  declarations: [
    GranjasPesquisaComponent
  ],
  imports: [
    CommonModule,
    GranjasRoutingModule
  ]
})
export class GranjasModule { }
