import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantiosRoutingModule } from './plantios-routing.module';
import { PlantiosPesquisaComponent } from './plantios-pesquisa/plantios-pesquisa.component';


@NgModule({
  declarations: [
    PlantiosPesquisaComponent
  ],
  imports: [
    CommonModule,
    PlantiosRoutingModule
  ]
})
export class PlantiosModule { }
