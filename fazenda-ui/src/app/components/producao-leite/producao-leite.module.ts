import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { SharedModule } from '../../shared/shared.module';
import { ProducaoLeitePesquisaComponent } from './producao-leite-pesquisa/producao-leite-pesquisa.component';
import { ProducaoLeiteRoutingModule } from './producao-leite-routing.module';


@NgModule({
  declarations: [
    ProducaoLeitePesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,
    DialogModule,

    SharedModule,
    ProducaoLeiteRoutingModule
  ]
})
export class ProducaoLeiteModule { }
