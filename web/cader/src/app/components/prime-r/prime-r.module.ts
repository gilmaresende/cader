import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputText2Component } from './input-text2/input-text2.component';
import { AppComponent } from 'src/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, FormsModule],
  declarations: [InputText2Component],
  exports: [InputText2Component],
})
export class PrimeRModule {}
