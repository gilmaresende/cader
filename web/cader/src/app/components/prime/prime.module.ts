import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnTesteComponent } from './btn/btn-teste/btn-teste.component';

import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { BtnIconComponent } from './btn/btn-icon/btn-icon.component';
import { BtnPrimaryComponent } from './btn/btn-primary/btn-primary.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DataTableComponent } from './data-table/data-table.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputReaisComponent } from './input-reais/input-reais.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ModelFilterComponent } from './model-filter/model-filter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToastComponent } from './toast/toast.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { DropDowComponent } from './drop-dow/drop-dow.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AbasTabComponent } from './abas-tab/abas-tab.component';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [
    BtnTesteComponent,
    InputTextComponent,
    InputPasswordComponent,
    BtnPrimaryComponent,
    ToastComponent,
    BtnIconComponent,
    SidebarComponent,
    TreeMenuComponent,
    DataTableComponent,
    InputSwitchComponent,
    ConfirmDialogComponent,
    InputReaisComponent,
    ModelFilterComponent,
    InputDateComponent,
    AutoCompleteComponent,
    DropDowComponent,
    TextAreaComponent,
    AbasTabComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    ToastModule,
    SidebarModule,
    PanelMenuModule,
    TableModule,
    InputSwitchModule,
    ConfirmDialogModule,
    InputNumberModule,
    StyleClassModule,
    DialogModule,
    CalendarModule,
    AutoCompleteModule,
    DropdownModule,
    InputTextareaModule,
    TabViewModule,
  ],
  exports: [
    BtnTesteComponent,
    InputTextComponent,
    InputPasswordComponent,
    BtnPrimaryComponent,
    ToastComponent,
    SidebarComponent,
    DataTableComponent,
    InputSwitchComponent,
    ConfirmDialogComponent,
    InputReaisComponent,
    ModelFilterComponent,
    InputDateComponent,
    AutoCompleteComponent,
    DropDowComponent,
    TextAreaComponent,
    AbasTabComponent,
  ],
})
export class PrimeModule {}
