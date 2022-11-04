import { EquipamentoCadastroComponent } from './equipamento-cadastro/equipamento-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { EquipamentosPesquisaComponent } from './equipamentos-pesquisa/equipamentos-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EquipamentosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_EQUIPAMENTO'] }
  },
  {
    path: 'novo',
    component: EquipamentoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_EQUIPAMENTO'] }
  },
  {
    path: ':codigo',
    component: EquipamentoCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_EQUIPAMENTO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
