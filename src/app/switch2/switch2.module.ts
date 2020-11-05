import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Switch2PageRoutingModule } from './switch2-routing.module';

import { Switch2Page } from './switch2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Switch2PageRoutingModule
  ],
  declarations: [Switch2Page]
})
export class Switch2PageModule {}
