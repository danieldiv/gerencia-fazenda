import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


import { GranjasRoutingModule } from './granjas-routing.module';
import { GranjasPesquisaComponent } from './granjas-pesquisa/granjas-pesquisa.component';


@NgModule({
  declarations: [
    GranjasPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    GranjasRoutingModule
  ]
})
export class GranjasModule { }
