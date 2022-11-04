import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { GranjasPesquisaComponent } from './granjas-pesquisa/granjas-pesquisa.component';
import { GranjasRoutingModule } from './granjas-routing.module';
import { GranjaCadastroComponent } from './granja-cadastro/granja-cadastro.component';


@NgModule({
  declarations: [
    GranjasPesquisaComponent,
    GranjaCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputNumberModule,
    DropdownModule,

    SharedModule,
    GranjasRoutingModule
  ]
})
export class GranjasModule { }
