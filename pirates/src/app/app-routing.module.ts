import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiratesComponent } from './pirates/pirates.component';
import { VesselsComponent } from './vessels/vessels.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'pirates', },
  { path: 'pirates', component: PiratesComponent },
  { path: 'vessels', component: VesselsComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  PiratesComponent,
  VesselsComponent,
  PageNotFoundComponent
];