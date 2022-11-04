import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { SharedModule } from './../../shared/shared.module';
import { SetoresPesquisaComponent } from './setores-pesquisa/setores-pesquisa.component';
import { SetoresRoutingModule } from './setores-routing.module';
import { SetorCadastroComponent } from './setor-cadastro/setor-cadastro.component';


@NgModule({
  declarations: [
    SetoresPesquisaComponent,
    SetorCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // InputTextModule,
    // ButtonModule,
    // TableModule,
    // PanelModule,
    // CardModule,

    SharedModule,
    SetoresRoutingModule
  ]
})
export class SetoresModule { }
