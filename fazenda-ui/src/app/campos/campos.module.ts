import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { SharedModule } from './../shared/shared.module';

import { CamposRoutingModule } from './campos-routing.module';
import { CamposPesquisaComponent } from './campos-pesquisa/campos-pesquisa.component';


@NgModule({
  declarations: [
    CamposPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    CamposRoutingModule
  ]
})
export class CamposModule { }
