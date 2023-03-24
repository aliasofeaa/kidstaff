import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterparentsPageRoutingModule } from './registerparents-routing.module';

import { RegisterparentsPage } from './registerparents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterparentsPageRoutingModule
  ],
  declarations: [RegisterparentsPage]
})
export class RegisterparentsPageModule {}
