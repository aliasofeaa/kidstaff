import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterparentsPage } from './registerparents.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterparentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterparentsPageRoutingModule {}
