import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainparentsPage } from './mainparents.page';

const routes: Routes = [
  {
    path: '',
    component: MainparentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainparentsPageRoutingModule {}
