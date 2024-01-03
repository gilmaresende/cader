import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FusionModule } from '../components/fusion/fusion.module';
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
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeRModule } from '../components/prime-r/prime-r.module';
import { CustomizedModule } from '../components/custom/customized.module';
import { CashInflowListComponent } from './controllership/cashinflow/cash-inflow-list/cash-inflow-list.component';
import { CashInflowFilterComponent } from './controllership/cashinflow/cash-inflow-filter/cash-inflow-filter.component';
import { CashInflowViewComponent } from './controllership/cashinflow/cash-inflow-view/cash-inflow-view.component';
import { CashInflowDetailComponent } from './controllership/cashinflow/cash-inflow-view/cash-inflow-detail/cash-inflow-detail.component';
import { CashInflowPaymentComponent } from './controllership/cashinflow/cash-inflow-view/cash-inflow-payment/cash-inflow-payment.component';
import { CashInflowPaymentViewComponent } from './controllership/cashinflow/cash-inflow-view/cash-inflow-payment-view/cash-inflow-payment-view.component';
import { CardInvoiceListComponent } from './controllership/cardinvoice/card-invoice-list/card-invoice-list.component';
import { CardInvoiceViewComponent } from './controllership/cardinvoice/card-invoice-view/card-invoice-view.component';
import { CardInvoiceFilterComponent } from './controllership/cardinvoice/card-invoice-filter/card-invoice-filter.component';
import { CardInvoiceLaunchComponent } from './controllership/cardinvoice/card-invoice-view/card-invoice-launch/card-invoice-launch.component';
import { CreateComponent } from './dev/bi/create/create.component';
import { CreateBiComponent } from './dev/bi/create-bi/create-bi.component';
import { BIQueryItemComponent } from './dev/bi/create-bi/components/biquery-item/biquery-item.component';
import { BIParameterItemComponent } from './dev/bi/create-bi/components/biparameter-item/biparameter-item.component';
import { FormParameterBIViewComponent } from './dev/bi/create-bi/components/biparameter-item/form-parameter-biview/form-parameter-biview.component';
import { DefinedParameterViewComponent } from './dev/bi/create-bi/components/biparameter-item/form-parameter-biview/defined-parameter-view/defined-parameter-view.component';
import { ListBiComponent } from './dev/bi/create-bi/list-bi/list-bi.component';
import { TemplatesModule } from '../templates/templates.module';

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
    CashInflowListComponent,
    CashInflowFilterComponent,
    CashInflowViewComponent,
    CashInflowDetailComponent,
    CashInflowPaymentComponent,
    CashInflowPaymentViewComponent,
    CardInvoiceListComponent,
    CardInvoiceViewComponent,
    CardInvoiceFilterComponent,
    CardInvoiceLaunchComponent,
    CreateComponent,
    CreateBiComponent,
    BIQueryItemComponent,
    BIParameterItemComponent,
    FormParameterBIViewComponent,
    DefinedParameterViewComponent,
    ListBiComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeModule,
    TemplatesModule,
    FusionModule,
    ReactiveFormsModule,
    PrimeRModule,
    CustomizedModule,
  ],
})
export class AuthModule {}
