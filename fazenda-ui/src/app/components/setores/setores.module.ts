import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { SharedModule } from './../../shared/shared.module';
import { SetoresPesquisaComponent } from './setores-pesquisa/setores-pesquisa.component';
import { SetoresRoutingModule } from './setores-routing.module';


@NgModule({
  declarations: [
    SetoresPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,
    DialogModule,
    ToolbarModule,

    SharedModule,
    SetoresRoutingModule
  ]
})
export class SetoresModule { }
