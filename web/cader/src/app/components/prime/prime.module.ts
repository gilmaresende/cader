import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnTesteComponent } from './btn/btn-teste/btn-teste.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputPasswordComponent } from './input-password/input-password.component';
import { FormsModule } from '@angular/forms';
import { BtnPrimaryComponent } from './btn/btn-primary/btn-primary.component';

@NgModule({
  declarations: [
    BtnTesteComponent,
    ToolbarComponent,
    InputTextComponent,
    InputPasswordComponent,
    BtnPrimaryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
  ],
  exports: [
    BtnTesteComponent,
    ToolbarComponent,
    InputTextComponent,
    InputPasswordComponent,
    BtnPrimaryComponent,
  ],
})
export class PrimeModule {}
