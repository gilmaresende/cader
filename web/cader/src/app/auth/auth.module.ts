import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { PrimeModule } from '../components/prime/prime.module';
import { MaterialModule } from '../components/material/material.module';

@NgModule({
  declarations: [HomeComponent, ViewComponent],
  imports: [CommonModule, AuthRoutingModule, PrimeModule, MaterialModule],
})
export class AuthModule {}
