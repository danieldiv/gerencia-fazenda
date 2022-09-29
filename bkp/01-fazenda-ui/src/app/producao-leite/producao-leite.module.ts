import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducaoLeiteRoutingModule } from './producao-leite-routing.module';
import { ProducaoLeitePesquisaComponent } from './producao-leite-pesquisa/producao-leite-pesquisa.component';


@NgModule({
  declarations: [
    ProducaoLeitePesquisaComponent
  ],
  imports: [
    CommonModule,
    ProducaoLeiteRoutingModule
  ]
})
export class ProducaoLeiteModule { }
