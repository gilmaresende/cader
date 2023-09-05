import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnTesteComponent } from './btn/btn-teste/btn-teste.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { BtnPrimaryComponent } from './btn/btn-primary/btn-primary.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';
import { BtnIconComponent } from './btn/btn-icon/btn-icon.component';

@NgModule({
  declarations: [
    BtnTesteComponent,
    ToolbarComponent,
    InputTextComponent,
    InputPasswordComponent,
    BtnPrimaryComponent,
    ToastComponent,
    BtnIconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    ToastModule
  ],
  exports: [
    BtnTesteComponent,
    ToolbarComponent,
    InputTextComponent,
    InputPasswordComponent,
    BtnPrimaryComponent,
    ToastComponent,
  ],
})
export class PrimeModule {}
