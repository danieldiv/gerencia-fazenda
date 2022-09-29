import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimaisPesquisaComponent } from './animais-pesquisa/animais-pesquisa.component';


@NgModule({
  declarations: [
    AnimaisPesquisaComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
