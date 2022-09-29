import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'setores', loadChildren: () => import('../app/setores/setores.module').then(s => s.SetoresModule) },
  { path: 'producao-leite', loadChildren: () => import('../app/producao-leite/producao-leite.module').then(p => p.ProducaoLeiteModule) },
  { path: 'plantios', loadChildren: () => import('../app/plantios/plantios.module').then(p => p.PlantiosModule) },
  { path: 'pastos', loadChildren: () => import('../app/pastos/pastos.module').then(p => p.PastosModule) },
  { path: 'ovos', loadChildren: () => import('../app/ovos/ovos.module').then(o => o.OvosModule) },
  { path: 'lancamentos', loadChildren: () => import('../app/lancamentos/lancamentos.module').then(l => l.LancamentosModule) },
  { path: 'granjas', loadChildren: () => import('../app/granjas/granjas.module').then(g => g.GranjasModule) },
  { path: 'funcionarios', loadChildren: () => import('../app/funcionarios/funcionarios.module').then(f => f.FuncionariosModule) },
  { path: 'equipamentos', loadChildren: () => import('../app/equipamentos/equipamentos.module').then(e => e.EquipamentosModule) },
  { path: 'culturas', loadChildren: () => import('../app/culturas/culturas.module').then(c => c.CulturasModule) },
  { path: 'campos', loadChildren: () => import('../app/campos/campos.module').then(c => c.CamposModule) },
  { path: 'animais', loadChildren: () => import('../app/animais/animais.module').then(a => a.AnimaisModule) },

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
