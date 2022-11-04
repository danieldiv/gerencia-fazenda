import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { CulturaCadastroComponent } from './cultura-cadastro/cultura-cadastro.component';
import { CulturasPesquisaComponent } from './culturas-pesquisa/culturas-pesquisa.component';
import { CulturasRoutingModule } from './culturas-routing.module';


@NgModule({
  declarations: [
    CulturasPesquisaComponent,
    CulturaCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    SharedModule,
    CulturasRoutingModule
  ]
})
export class CulturasModule { }
