import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, FormsModule],
  declarations: [InputTextComponent],
  exports: [InputTextComponent],
})
export class CustomizedModule {}
