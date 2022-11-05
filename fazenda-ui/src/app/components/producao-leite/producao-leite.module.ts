import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SharedModule } from '../../shared/shared.module';
import { ProducaoLeitePesquisaComponent } from './producao-leite-pesquisa/producao-leite-pesquisa.component';
import { ProducaoLeiteRoutingModule } from './producao-leite-routing.module';
import { ProducaoLeiteCadastroComponent } from './producao-leite-cadastro/producao-leite-cadastro.component';


@NgModule({
  declarations: [
    ProducaoLeitePesquisaComponent,
    ProducaoLeiteCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputNumberModule,
    SelectButtonModule,
    DropdownModule,

    SharedModule,
    ProducaoLeiteRoutingModule
  ]
})
export class ProducaoLeiteModule { }
