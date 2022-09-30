import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { SharedModule } from './../shared/shared.module';

import { CulturasRoutingModule } from './culturas-routing.module';
import { CulturasPesquisaComponent } from './culturas-pesquisa/culturas-pesquisa.component';


@NgModule({
  declarations: [
    CulturasPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    CulturasRoutingModule
  ]
})
export class CulturasModule { }
