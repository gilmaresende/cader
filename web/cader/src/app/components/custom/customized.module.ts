import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputReaisComponent } from './input-reais/input-reais.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextComponent } from './input-text/input-text.component';
import { LabelTextComponent } from './label-text/label-text.component';
import { DataTableComponent } from './data-table/data-table.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { TwoDecimalMaskDirective } from 'src/app/core/directives/mask/two-decimal';
import { InputAreaComponent } from './input-area/input-area.component';
import { AbaHComponent } from './aba/aba-h/aba-h.component';
import { AbaHItemComponent } from './aba/aba-hitem/aba-hitem.component';
import { DropdownstrComponent } from './dropdownstr/dropdownstr.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { CheckComponent } from './check/check.component';
import { TreeComponent } from './tree/tree.component';
import { IkMaskDirective } from './directive/ik-mask.directive';
import { IkMoneyDirective } from './directive/ik-money.directive';
@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    InputSwitchModule,
    DropdownModule,
    AutoCompleteModule,
    CalendarModule,
    TableModule,
    TreeModule,
  ],
  declarations: [
    InputTextComponent,
    InputSwitchComponent,
    InputReaisComponent,
    DropdownComponent,
    AutocompleteComponent,
    InputDateComponent,
    LabelTextComponent,
    DataTableComponent,
    TwoDecimalMaskDirective,
    InputAreaComponent,
    AbaHComponent,
    AbaHItemComponent,
    DropdownstrComponent,
    InputRadioComponent,
    CheckComponent,
    TreeComponent,
    IkMaskDirective,
    IkMoneyDirective,
  ],
  exports: [
    InputTextComponent,
    InputSwitchComponent,
    InputReaisComponent,
    DropdownComponent,
    AutocompleteComponent,
    InputDateComponent,
    LabelTextComponent,
    DataTableComponent,
    InputAreaComponent,
    AbaHComponent,
    AbaHItemComponent,
    DropdownstrComponent,
    InputRadioComponent,
    CheckComponent,
    TreeComponent,
    IkMaskDirective,
    IkMoneyDirective,
  ],
})
export class CustomizedModule {}
