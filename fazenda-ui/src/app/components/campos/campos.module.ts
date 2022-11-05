import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { CamposPesquisaComponent } from './campos-pesquisa/campos-pesquisa.component';
import { CamposRoutingModule } from './campos-routing.module';
import { CampoCadastroComponent } from './campo-cadastro/campo-cadastro.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    CamposPesquisaComponent,
    CampoCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputNumberModule,

    SharedModule,
    CamposRoutingModule
  ]
})
export class CamposModule { }
