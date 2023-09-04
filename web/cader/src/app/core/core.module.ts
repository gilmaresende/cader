import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PrimeModule } from '../components/prime/prime.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, CoreRoutingModule, PrimeModule],
})
export class CoreModule {}
