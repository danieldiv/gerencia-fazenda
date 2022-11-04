import { CampoCadastroComponent } from './campo-cadastro/campo-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { CamposPesquisaComponent } from './campos-pesquisa/campos-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CamposPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_CAMPO'] }
  },
  {
    path: 'novo',
    component: CampoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_CAMPO'] }
  },
  {
    path: ':codigo',
    component: CampoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_CAMPO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamposRoutingModule { }
