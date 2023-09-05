import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnTesteComponent } from './btn/btn-teste/btn-teste.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { BtnIconComponent } from './btn/btn-icon/btn-icon.component';
import { BtnPrimaryComponent } from './btn/btn-primary/btn-primary.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ToastComponent } from './toast/toast.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DataTableComponent } from './data-table/data-table.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
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
  ],
  exports: [
    BtnTesteComponent,
    InputTextComponent,
    InputPasswordComponent,
    BtnPrimaryComponent,
    ToastComponent,
    SidebarComponent,
    DataTableComponent,
  ],
})
export class PrimeModule {}
