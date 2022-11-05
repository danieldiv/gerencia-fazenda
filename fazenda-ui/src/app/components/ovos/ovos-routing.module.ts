import { OvosCadastroComponent } from './ovos-cadastro/ovos-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { OvosPesquisaComponent } from './ovos-pesquisa/ovos-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OvosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_OVOS'] }
  },
  {
    path: 'novo',
    component: OvosCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_OVOS'] }
  },
  {
    path: ':codigo',
    component: OvosCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_OVOS'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvosRoutingModule { }
