import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Switch2Page } from './switch2.page';

const routes: Routes = [
  {
    path: '',
    component: Switch2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Switch2PageRoutingModule {}
