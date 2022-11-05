import { PlantioCadastroComponent } from './plantio-cadastro/plantio-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { PlantiosPesquisaComponent } from './plantios-pesquisa/plantios-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlantiosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PLANTIO'] }
  },
  {
    path: 'novo',
    component: PlantioCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PLANTIO'] }
  },
  {
    path: ':codigo',
    component: PlantioCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PLANTIO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantiosRoutingModule { }
