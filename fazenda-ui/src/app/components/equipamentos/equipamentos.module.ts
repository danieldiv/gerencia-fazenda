import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { EquipamentoCadastroComponent } from './equipamento-cadastro/equipamento-cadastro.component';
import { EquipamentosPesquisaComponent } from './equipamentos-pesquisa/equipamentos-pesquisa.component';
import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    EquipamentosPesquisaComponent,
    EquipamentoCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    CalendarModule,

    SharedModule,
    EquipamentosRoutingModule
  ]
})
export class EquipamentosModule { }
