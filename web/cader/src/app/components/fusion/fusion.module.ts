import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { PrimeModule } from '../prime/prime.module';
import { ModalImplComponent } from './modal-impl/modal-impl.component';

@NgModule({
  declarations: [MenuComponent, ModalImplComponent],
  imports: [CommonModule, MaterialModule, PrimeModule],
  exports: [MenuComponent, ModalImplComponent],
})
export class FusionModule {}
