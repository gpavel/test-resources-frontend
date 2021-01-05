import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
