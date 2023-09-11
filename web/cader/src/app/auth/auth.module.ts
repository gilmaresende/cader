import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FusionModule } from '../components/fusion/fusion.module';
import { MaterialModule } from '../components/material/material.module';
import { PrimeModule } from '../components/prime/prime.module';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './home/home.component';
import { PersonViewComponent } from './register/person/person-view/person-view.component';
import { WalletListComponent } from './register/wallet/wallet-list/wallet-list.component';
import { WalletViewComponent } from './register/wallet/wallet-view/wallet-view.component';
import { ViewComponent } from './view/view.component';
import { PersonListComponent } from './register/person/person-list/person-list.component';
import { ExpenseCategoryListComponent } from './register/expense-category/expense-category-list/expense-category-list.component';
import { ExpenseCategoryViewComponent } from './register/expense-category/expense-category-view/expense-category-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    ViewComponent,
    WalletListComponent,
    WalletViewComponent,
    PersonViewComponent,
    PersonListComponent,
    ExpenseCategoryListComponent,
    ExpenseCategoryViewComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeModule,
    MaterialModule,
    FusionModule,
  ],
})
export class AuthModule {}
