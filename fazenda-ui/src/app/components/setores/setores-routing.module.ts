import { SetorCadastroComponent } from './setor-cadastro/setor-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { SetoresPesquisaComponent } from './setores-pesquisa/setores-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SetoresPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_SETOR'] }
  },
  {
    path: 'novo',
    component: SetorCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_SETOR'] }
  },
  {
    path: ':codigo',
    component: SetorCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_SETOR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
