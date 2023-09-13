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
import { IncomeCategoryListComponent } from './register/income-category/income-category-list/income-category-list.component';
import { IncomeCategoryViewComponent } from './register/income-category/income-category-view/income-category-view.component';
import { PaymentTypeListComponent } from './register/payment-type/payment-type-list/payment-type-list.component';
import { PaymentTypeViewComponent } from './register/payment-type/payment-type-view/payment-type-view.component';
import { CardListComponent } from './register/card/card-list/card-list.component';
import { CardViewComponent } from './register/card/card-view/card-view.component';
import { MovementListComponent } from './controllership/movement/movement-list/movement-list.component';
import { MovementFilterComponent } from './controllership/movement/movement-filter/movement-filter.component';

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
    IncomeCategoryListComponent,
    IncomeCategoryViewComponent,
    PaymentTypeListComponent,
    PaymentTypeViewComponent,
    CardListComponent,
    CardViewComponent,
    MovementListComponent,
    MovementFilterComponent,
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
