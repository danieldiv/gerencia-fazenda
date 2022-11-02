import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


import { CamposRoutingModule } from './campos-routing.module';
import { CamposPesquisaComponent } from './campos-pesquisa/campos-pesquisa.component';


@NgModule({
  declarations: [
    CamposPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    // ButtonModule,
    // TableModule,
    // PanelModule,
    // CardModule,
    // InputTextModule,
    // InputNumberModule,

    SharedModule,
    CamposRoutingModule
  ]
})
export class CamposModule { }
