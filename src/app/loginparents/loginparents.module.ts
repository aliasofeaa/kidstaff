import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginparentsPageRoutingModule } from './loginparents-routing.module';

import { LoginparentsPage } from './loginparents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginparentsPageRoutingModule
  ],
  declarations: [LoginparentsPage]
})
export class LoginparentsPageModule {}
