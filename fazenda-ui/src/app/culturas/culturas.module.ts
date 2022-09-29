import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulturasRoutingModule } from './culturas-routing.module';
import { CulturasPesquisaComponent } from './culturas-pesquisa/culturas-pesquisa.component';


@NgModule({
  declarations: [
    CulturasPesquisaComponent
  ],
  imports: [
    CommonModule,
    CulturasRoutingModule
  ]
})
export class CulturasModule { }
