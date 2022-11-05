import { AnimalCadastroComponent } from './animal-cadastro/animal-cadastro.component';
import { AuthGuard } from './../../guard/auth.guard';
import { AnimaisPesquisaComponent } from './animais-pesquisa/animais-pesquisa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AnimaisPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_ANIMAL'] }
  },
  {
    path: 'novo',
    component: AnimalCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_ANIMAL'] }
  },
  {
    path: ':codigo',
    component: AnimalCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_ANIMAL'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
