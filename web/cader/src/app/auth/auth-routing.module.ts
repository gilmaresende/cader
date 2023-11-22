import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { PersonViewComponent } from './register/person/person-view/person-view.component';
import { WalletViewComponent } from './register/wallet/wallet-view/wallet-view.component';
import { PersonListComponent } from './register/person/person-list/person-list.component';
import { ExpenseCategoryListComponent } from './register/expense-category/expense-category-list/expense-category-list.component';
import { ExpenseCategoryViewComponent } from './register/expense-category/expense-category-view/expense-category-view.component';
import { IncomeCategoryListComponent } from './register/income-category/income-category-list/income-category-list.component';
import { IncomeCategoryViewComponent } from './register/income-category/income-category-view/income-category-view.component';
import { PaymentTypeListComponent } from './register/payment-type/payment-type-list/payment-type-list.component';
import { PaymentTypeViewComponent } from './register/payment-type/payment-type-view/payment-type-view.component';
import { CardListComponent } from './register/card/card-list/card-list.component';
import { CardViewComponent } from './register/card/card-view/card-view.component';
import { WalletListComponent } from './register/wallet/wallet-list/wallet-list.component';
import { MovementListComponent } from './controllership/movement/movement-list/movement-list.component';
import { ExpenseListComponent } from './controllership/expense/expense-list/expense-list.component';
import { TesteHqlComponent } from './dev/teste-hql/teste-hql.component';
import { ExpenseViewComponent } from './controllership/expense/expense-view/expense-view.component';
import { ExpenseDetailComponent } from './controllership/expense/expense-view/expense-detail/expense-detail.component';
import { MovementViewComponent } from './controllership/movement/movement-view/movement-view.component';
import { CashInflowListComponent } from './controllership/cashinflow/cash-inflow-list/cash-inflow-list.component';
import { CashInflowViewComponent } from './controllership/cashinflow/cash-inflow-view/cash-inflow-view.component';
import { CardInvoiceListComponent } from './controllership/cardinvoice/card-invoice-list/card-invoice-list.component';
import { CardInvoiceViewComponent } from './controllership/cardinvoice/card-invoice-view/card-invoice-view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'card',
        children: [
          { path: '', component: CardViewComponent },
          { path: 'list', component: CardListComponent },
          { path: ':id', component: CardViewComponent },
        ],
      },
      {
        path: 'expenseCategory',
        children: [
          { path: '', component: ExpenseCategoryViewComponent },
          { path: 'list', component: ExpenseCategoryListComponent },
          { path: ':id', component: ExpenseCategoryViewComponent },
        ],
      },
      {
        path: 'incomeCategory',
        children: [
          { path: '', component: IncomeCategoryViewComponent },
          { path: 'list', component: IncomeCategoryListComponent },
          { path: ':id', component: IncomeCategoryViewComponent },
        ],
      },
      {
        path: 'paymentType',
        children: [
          { path: '', component: PaymentTypeViewComponent },
          { path: 'list', component: PaymentTypeListComponent },
          { path: ':id', component: PaymentTypeViewComponent },
        ],
      },
      {
        path: 'person',
        children: [
          {
            path: '',
            component: PersonViewComponent,
          },
          { path: 'list', component: PersonListComponent },
          {
            path: ':id',
            component: PersonViewComponent,
          },
        ],
      },
      {
        path: 'wallet',
        children: [
          { path: '', component: WalletViewComponent },
          { path: 'list', component: WalletListComponent },
          { path: ':id', component: WalletViewComponent },
        ],
      },
      {
        path: 'movement',
        children: [
          { path: '', component: MovementViewComponent },
          { path: 'list', component: MovementListComponent },
          { path: ':id', component: MovementViewComponent },
        ],
      },
      {
        path: 'expense',
        children: [
          { path: '', component: ExpenseViewComponent },
          { path: 'list', component: ExpenseListComponent },
          { path: ':id', component: ExpenseViewComponent },
        ],
      },
      {
        path: 'cashInflow',
        children: [
          { path: '', component: CashInflowViewComponent },
          { path: 'list', component: CashInflowListComponent },
          { path: ':id', component: CashInflowViewComponent },
        ],
      },
      {
        path: 'cardInvoice',
        children: [
          { path: '', component: CardInvoiceViewComponent },
          { path: 'list', component: CardInvoiceListComponent },
          { path: ':id', component: CardInvoiceViewComponent },
        ],
      },

      {
        path: 'testeHql',
        component: TesteHqlComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
