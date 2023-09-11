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
        path: 'person',
        children: [
          { path: '', component: PersonViewComponent },
          { path: 'list', component: PersonListComponent },
          { path: ':id', component: PersonViewComponent },
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
        path: 'wallet',
        component: WalletViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
