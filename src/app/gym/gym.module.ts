import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { GymComponent } from './gym/gym.component';
import { SharedModule } from '../shared/shared.module';
import { DialogTreinosComponent } from './dialog-treinos/dialog-treinos.component';


@NgModule({
  declarations: [
    GymComponent,
    DialogTreinosComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule,
    SharedModule
  ]
})
export class GymModule { }
