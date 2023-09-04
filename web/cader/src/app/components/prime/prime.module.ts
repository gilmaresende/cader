import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnTesteComponent } from './btn/btn-teste/btn-teste.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [BtnTesteComponent, ToolbarComponent],
  imports: [CommonModule, ButtonModule, ToolbarModule],
  exports: [BtnTesteComponent, ToolbarComponent],
})
export class PrimeModule {}
