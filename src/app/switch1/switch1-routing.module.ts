import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Switch1Page } from './switch1.page';

const routes: Routes = [
  {
    path: '',
    component: Switch1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Switch1PageRoutingModule {}
