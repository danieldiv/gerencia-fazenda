import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OvosRoutingModule } from './ovos-routing.module';
import { OvosPesquisaComponent } from './ovos-pesquisa/ovos-pesquisa.component';


@NgModule({
  declarations: [
    OvosPesquisaComponent
  ],
  imports: [
    CommonModule,
    OvosRoutingModule
  ]
})
export class OvosModule { }
