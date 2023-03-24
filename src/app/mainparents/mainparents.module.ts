import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainparentsPageRoutingModule } from './mainparents-routing.module';

import { MainparentsPage } from './mainparents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainparentsPageRoutingModule
  ],
  declarations: [MainparentsPage]
})
export class MainparentsPageModule {}
