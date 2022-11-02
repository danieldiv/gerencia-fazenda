import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'setores', loadChildren: () => import('../app/components/setores/setores.module').then(s => s.SetoresModule) },
  { path: 'producao-leite', loadChildren: () => import('../app/components/producao-leite/producao-leite.module').then(p => p.ProducaoLeiteModule) },
  { path: 'plantios', loadChildren: () => import('../app/components/plantios/plantios.module').then(p => p.PlantiosModule) },
  { path: 'pastos', loadChildren: () => import('../app/components/pastos/pastos.module').then(p => p.PastosModule) },
  { path: 'ovos', loadChildren: () => import('../app/components/ovos/ovos.module').then(o => o.OvosModule) },
  { path: 'lancamentos', loadChildren: () => import('../app/components/lancamentos/lancamentos.module').then(l => l.LancamentosModule) },
  { path: 'granjas', loadChildren: () => import('../app/components/granjas/granjas.module').then(g => g.GranjasModule) },
  { path: 'funcionarios', loadChildren: () => import('../app/components/funcionarios/funcionarios.module').then(f => f.FuncionariosModule) },
  { path: 'equipamentos', loadChildren: () => import('../app/components/equipamentos/equipamentos.module').then(e => e.EquipamentosModule) },
  { path: 'culturas', loadChildren: () => import('../app/components/culturas/culturas.module').then(c => c.CulturasModule) },
  { path: 'campos', loadChildren: () => import('../app/components/campos/campos.module').then(c => c.CamposModule) },
  { path: 'animais', loadChildren: () => import('../app/components/animais/animais.module').then(a => a.AnimaisModule) },

  { path: '', redirectTo: 'setores', pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
