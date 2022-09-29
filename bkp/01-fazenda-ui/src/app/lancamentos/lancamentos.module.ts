import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';


@NgModule({
  declarations: [
    LancamentosPesquisaComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
