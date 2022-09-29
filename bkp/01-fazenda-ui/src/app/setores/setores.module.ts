import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresPesquisaComponent } from './setores-pesquisa/setores-pesquisa.component';


@NgModule({
  declarations: [
    SetoresPesquisaComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule
  ]
})
export class SetoresModule { }
