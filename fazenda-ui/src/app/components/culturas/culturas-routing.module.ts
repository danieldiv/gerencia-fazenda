import { CulturaCadastroComponent } from './cultura-cadastro/cultura-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { CulturasPesquisaComponent } from './culturas-pesquisa/culturas-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CulturasPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_CULTURA'] }
  },
  {
    path: 'novo',
    component: CulturaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_CULTURA'] }
  },
  {
    path: ':codigo',
    component: CulturaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_CULTURA'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CulturasRoutingModule { }
