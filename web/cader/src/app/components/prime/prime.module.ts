import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnTesteComponent } from './btn/btn-teste/btn-teste.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { BtnIconComponent } from './btn/btn-icon/btn-icon.component';
import { BtnPrimaryComponent } from './btn/btn-primary/btn-primary.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DataTableComponent } from './data-table/data-table.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextComponent } from './input-text/input-text.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToastComponent } from './toast/toast.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
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
  ],
})
export class PrimeModule {}
