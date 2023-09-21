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
import { ExpenseListComponent } from './controllership/expense/expense-list/expense-list.component';
import { ExpenseFilterComponent } from './controllership/expense/expense-filter/expense-filter.component';
import { TesteHqlComponent } from './dev/teste-hql/teste-hql.component';
import { ExpenseViewComponent } from './controllership/expense/expense-view/expense-view.component';
import { ExpenseDetailComponent } from './controllership/expense/expense-view/expense-detail/expense-detail.component';
import { ExpensePaymentComponent } from './controllership/expense/expense-view/expense-payment/expense-payment.component';
import { ExpensePaymentViewComponent } from './controllership/expense/expense-view/expense-payment-view/expense-payment-view.component';
import { MovementViewComponent } from './controllership/movement/movement-view/movement-view.component';

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
    ExpenseListComponent,
    ExpenseFilterComponent,
    TesteHqlComponent,
    ExpenseViewComponent,
    ExpenseDetailComponent,
    ExpensePaymentComponent,
    ExpensePaymentViewComponent,
    MovementViewComponent,
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
