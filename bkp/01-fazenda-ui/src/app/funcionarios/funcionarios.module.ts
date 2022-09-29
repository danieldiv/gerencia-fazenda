import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosPesquisaComponent } from './funcionarios-pesquisa/funcionarios-pesquisa.component';


@NgModule({
  declarations: [
    FuncionariosPesquisaComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
