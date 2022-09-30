import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { SharedModule } from './../shared/shared.module';

import { PlantiosRoutingModule } from './plantios-routing.module';
import { PlantiosPesquisaComponent } from './plantios-pesquisa/plantios-pesquisa.component';


@NgModule({
  declarations: [
    PlantiosPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    PlantiosRoutingModule
  ]
})
export class PlantiosModule { }
