import { ProducaoLeiteCadastroComponent } from './producao-leite-cadastro/producao-leite-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { ProducaoLeitePesquisaComponent } from './producao-leite-pesquisa/producao-leite-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProducaoLeitePesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PRODUCAO_LEITE'] }
  },
  {
    path: 'novo',
    component: ProducaoLeiteCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PRODUCAO_LEITE'] }
  },
  {
    path: ':codigo',
    component: ProducaoLeiteCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PRODUCAO_LEITE'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducaoLeiteRoutingModule { }
