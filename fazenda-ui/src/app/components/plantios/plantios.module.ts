import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SharedModule } from './../../shared/shared.module';
import { PlantioCadastroComponent } from './plantio-cadastro/plantio-cadastro.component';
import { PlantiosPesquisaComponent } from './plantios-pesquisa/plantios-pesquisa.component';
import { PlantiosRoutingModule } from './plantios-routing.module';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    PlantiosPesquisaComponent,
    PlantioCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputNumberModule,
    SelectButtonModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,


    SharedModule,
    PlantiosRoutingModule
  ]
})
export class PlantiosModule { }
