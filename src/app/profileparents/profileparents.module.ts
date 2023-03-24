import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileparentsPageRoutingModule } from './profileparents-routing.module';

import { ProfileparentsPage } from './profileparents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileparentsPageRoutingModule
  ],
  declarations: [ProfileparentsPage]
})
export class ProfileparentsPageModule {}
