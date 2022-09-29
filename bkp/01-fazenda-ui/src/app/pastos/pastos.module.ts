import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastosRoutingModule } from './pastos-routing.module';
import { PastosPesquisaComponent } from './pastos-pesquisa/pastos-pesquisa.component';


@NgModule({
  declarations: [
    PastosPesquisaComponent
  ],
  imports: [
    CommonModule,
    PastosRoutingModule
  ]
})
export class PastosModule { }
