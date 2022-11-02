import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


import { AnimaisPesquisaComponent } from './animais-pesquisa/animais-pesquisa.component';
import { AnimaisRoutingModule } from './animais-routing.module';


@NgModule({
  declarations: [
    AnimaisPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,

    SharedModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
