import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Switch1PageRoutingModule } from './switch1-routing.module';

import { Switch1Page } from './switch1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Switch1PageRoutingModule
  ],
  declarations: [Switch1Page]
})
export class Switch1PageModule {}
