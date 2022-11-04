import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';

import { SelectButtonModule } from 'primeng/selectbutton';

import { AnimaisPesquisaComponent } from './animais-pesquisa/animais-pesquisa.component';
import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimalCadastroComponent } from './animal-cadastro/animal-cadastro.component';


@NgModule({
  declarations: [
    AnimaisPesquisaComponent,
    AnimalCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    SelectButtonModule,

    SharedModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
