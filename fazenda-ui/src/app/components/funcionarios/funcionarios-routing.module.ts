import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { FuncionariosPesquisaComponent } from './funcionarios-pesquisa/funcionarios-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_FUNCIONARIO'] }
  },
  {
    path: 'novo',
    component: FuncionarioCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_FUNCIONARIO'] }
  },
  {
    path: ':codigo',
    component: FuncionarioCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_FUNCIONARIO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
