import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateRegimeModule } from './create-regime/create-regime.module';
import { HttpClientModule } from '@angular/common/http';
import { GymModule } from './gym/gym.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CreateRegimeModule,
    HttpClientModule,
    GymModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
