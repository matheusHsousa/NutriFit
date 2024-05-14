import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrateRegimeComponent } from './crate-regime/crate-regime.component';

const routes: Routes = [
  { path: 'createRegime', component: CrateRegimeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRegimeRoutingModule { }
