import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputReaisComponent } from './input-reais/input-reais.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    InputSwitchModule,
    DropdownModule,
    AutoCompleteModule,
  ],
  declarations: [
    InputTextComponent,
    InputSwitchComponent,
    InputReaisComponent,
    DropdownComponent,
    AutocompleteComponent,
  ],
  exports: [
    InputTextComponent,
    InputSwitchComponent,
    InputReaisComponent,
    DropdownComponent,
    AutocompleteComponent,
  ],
})
export class CustomizedModule {}
