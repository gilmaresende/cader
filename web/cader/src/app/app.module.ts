import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomizedModule } from './components/custom/customized.module';
import { FusionModule } from './components/fusion/fusion.module';
import { MaterialModule } from './components/material/material.module';
import { PrimeModule } from './components/prime/prime.module';
import { CoreModule } from './core/core.module';
import { AuthInterceptorProvider } from './core/interceptors/auth.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    CustomizedModule,
    FontAwesomeModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
