import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRegimeRoutingModule } from './create-regime-routing.module';
import { CrateRegimeComponent } from './crate-regime/crate-regime.component';
import { SharedModule } from '../shared/shared.module';
import { DialogImcComponent } from './dialog-imc/dialog-imc.component';


@NgModule({
  declarations: [
    CrateRegimeComponent,
    DialogImcComponent,
  ],
  imports: [
    CommonModule,
    CreateRegimeRoutingModule,
    SharedModule,

  ]
})
export class CreateRegimeModule { }
