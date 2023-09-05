import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule } from './components/prime/prime.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { FusionModule } from './components/fusion/fusion.module';

//material

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule,
    MaterialModule,
    CoreModule,
    BrowserAnimationsModule,
    FusionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
