import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlamanosPage } from './llamanos.page';

const routes: Routes = [
  {
    path: '',
    component: LlamanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlamanosPageRoutingModule {}
