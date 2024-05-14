import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent } from './gym/gym.component';

const routes: Routes = [
  { path: 'gym', component: GymComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }
