import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'llamanos',
    loadChildren: () => import('./pages/llamanos/llamanos.module').then( m => m.LlamanosPageModule)
  },
  {
    path: 'estudios',
    loadChildren: () => import('./pages/estudios/estudios.module').then( m => m.EstudiosPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./pages/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'direccion',
    loadChildren: () => import('./pages/direccion/direccion.module').then( m => m.DireccionPageModule)
  },
  {
    path: 'casos',
    loadChildren: () => import('./pages/casos/casos.module').then( m => m.CasosPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
