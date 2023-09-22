import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputReaisComponent } from './input-reais/input-reais.component';
@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    InputSwitchModule,
  ],
  declarations: [InputTextComponent, InputSwitchComponent, InputReaisComponent],
  exports: [InputTextComponent, InputSwitchComponent, InputReaisComponent],
})
export class CustomizedModule {}
