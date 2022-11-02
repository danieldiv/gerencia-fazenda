import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosPesquisaComponent } from './funcionarios-pesquisa/funcionarios-pesquisa.component';


@NgModule({
  declarations: [
    FuncionariosPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
