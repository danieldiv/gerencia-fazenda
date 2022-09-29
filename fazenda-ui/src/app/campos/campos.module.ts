import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamposRoutingModule } from './campos-routing.module';
import { CamposPesquisaComponent } from './campos-pesquisa/campos-pesquisa.component';


@NgModule({
  declarations: [
    CamposPesquisaComponent
  ],
  imports: [
    CommonModule,
    CamposRoutingModule
  ]
})
export class CamposModule { }
