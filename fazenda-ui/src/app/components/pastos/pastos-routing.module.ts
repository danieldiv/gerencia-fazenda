import { PastoCadastroComponent } from './../pastos/pasto-cadastro/pasto-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { PastosPesquisaComponent } from './pastos-pesquisa/pastos-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PastosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PASTO'] }
  },
  {
    path: 'novo',
    component: PastoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PASTO'] }
  },
  {
    path: ':codigo',
    component: PastoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PASTO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastosRoutingModule { }
