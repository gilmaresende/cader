import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeModule } from '../prime/prime.module';
import { ModalImplComponent } from './modal-impl/modal-impl.component';
import { LoadingComponent } from './loading/loading.component';
import { ContadorComponent } from './contador/contador.component';
import { TemplatesModule } from 'src/app/templates/templates.module';

@NgModule({
  declarations: [
    MenuComponent,
    ModalImplComponent,
    LoadingComponent,
    ContadorComponent,
  ],
  imports: [CommonModule, TemplatesModule, PrimeModule],
  exports: [
    MenuComponent,
    ModalImplComponent,
    LoadingComponent,
    ContadorComponent,
  ],
})
export class FusionModule {}
