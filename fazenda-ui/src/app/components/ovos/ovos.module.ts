import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { OvosPesquisaComponent } from './ovos-pesquisa/ovos-pesquisa.component';
import { OvosRoutingModule } from './ovos-routing.module';
import { OvosCadastroComponent } from './ovos-cadastro/ovos-cadastro.component';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [
    OvosPesquisaComponent,
    OvosCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputNumberModule,
    SelectButtonModule,
    DropdownModule,
    CalendarModule,

    SharedModule,
    OvosRoutingModule
  ]
})
export class OvosModule { }
