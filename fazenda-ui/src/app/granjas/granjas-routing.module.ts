import { AuthGuard } from './../seguranca/auth.guard';
import { GranjasPesquisaComponent } from './granjas-pesquisa/granjas-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GranjasPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_GRANJA'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GranjasRoutingModule { }
