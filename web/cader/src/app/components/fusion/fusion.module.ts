import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { PrimeModule } from '../prime/prime.module';
import { ModalImplComponent } from './modal-impl/modal-impl.component';
import { LoadingComponent } from './loading/loading.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    MenuComponent,
    ModalImplComponent,
    LoadingComponent,
    ContadorComponent,
  ],
  imports: [CommonModule, MaterialModule, PrimeModule],
  exports: [
    MenuComponent,
    ModalImplComponent,
    LoadingComponent,
    ContadorComponent,
  ],
})
export class FusionModule {}
