import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { SharedModule } from './../shared/shared.module';

import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentosPesquisaComponent } from './equipamentos-pesquisa/equipamentos-pesquisa.component';


@NgModule({
  declarations: [
    EquipamentosPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    EquipamentosRoutingModule
  ]
})
export class EquipamentosModule { }
