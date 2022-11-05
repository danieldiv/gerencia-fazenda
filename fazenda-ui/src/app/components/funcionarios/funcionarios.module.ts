import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from './../../shared/shared.module';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionariosPesquisaComponent } from './funcionarios-pesquisa/funcionarios-pesquisa.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';

@NgModule({
  declarations: [
    FuncionariosPesquisaComponent,
    FuncionarioCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    DropdownModule,
    CalendarModule,

    SharedModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
