import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


import { OvosRoutingModule } from './ovos-routing.module';
import { OvosPesquisaComponent } from './ovos-pesquisa/ovos-pesquisa.component';


@NgModule({
  declarations: [
    OvosPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    OvosRoutingModule
  ]
})
export class OvosModule { }
