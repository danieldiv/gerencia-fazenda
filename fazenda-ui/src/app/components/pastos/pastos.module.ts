import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


import { PastosRoutingModule } from './pastos-routing.module';
import { PastosPesquisaComponent } from './pastos-pesquisa/pastos-pesquisa.component';


@NgModule({
  declarations: [
    PastosPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    PastosRoutingModule
  ]
})
export class PastosModule { }
