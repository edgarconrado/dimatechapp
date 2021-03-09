import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionPage } from './direccion.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionPage
  },
  {
    path: 'mapa/:geo',
    loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionPageRoutingModule {}
