import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from './../shared/shared.module';
import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresPesquisaComponent } from './setores-pesquisa/setores-pesquisa.component';


@NgModule({
  declarations: [
    SetoresPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,

    SharedModule,
    SetoresRoutingModule
  ]
})
export class SetoresModule { }
