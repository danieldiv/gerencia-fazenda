import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentosPesquisaComponent } from './equipamentos-pesquisa/equipamentos-pesquisa.component';


@NgModule({
  declarations: [
    EquipamentosPesquisaComponent
  ],
  imports: [
    CommonModule,
    EquipamentosRoutingModule
  ]
})
export class EquipamentosModule { }
