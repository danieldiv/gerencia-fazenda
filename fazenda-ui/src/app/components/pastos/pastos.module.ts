import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedModule } from './../../shared/shared.module';
import { PastoCadastroComponent } from './pasto-cadastro/pasto-cadastro.component';
import { PastosPesquisaComponent } from './pastos-pesquisa/pastos-pesquisa.component';
import { PastosRoutingModule } from './pastos-routing.module';


@NgModule({
  declarations: [
    PastosPesquisaComponent,
    PastoCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputNumberModule,
    DropdownModule,

    SharedModule,
    PastosRoutingModule
  ]
})
export class PastosModule { }
