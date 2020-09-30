import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoTreinoPage } from './novo-treino.page';

const routes: Routes = [
  {
    path: '',
    component: NovoTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoTreinoPageRoutingModule {}
