import { GranjaCadastroComponent } from './granja-cadastro/granja-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { GranjasPesquisaComponent } from './granjas-pesquisa/granjas-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GranjasPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_GRANJA'] }
  },
  {
    path: 'novo',
    component: GranjaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_GRANJA'] }
  },
  {
    path: ':codigo',
    component: GranjaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_GRANJA'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GranjasRoutingModule { }
