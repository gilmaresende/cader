import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { PagesService } from 'src/app/core/services/pages.service';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from 'src/app/core/utils/Date/date-util';
import { ExpenseFilter } from 'src/app/model-filter/expense-filter';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { PersonService } from 'src/app/services/person.service';
import { WalletService } from 'src/app/services/wallet.service';
import {
  EnumExpenseOriginFilter,
  EnumExpenseStatusFilter,
} from 'src/data/combos-enum';

@Component({
  selector: 'expense-filter',
  templateUrl: './expense-filter.component.html',
  styleUrls: ['./expense-filter.component.scss'],
})
export class ExpenseFilterComponent extends SFilter<ExpenseFilter> {
  constructor(
    private factore: FactoryCoreService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceExpenseCategory: ExpenseCategoryService
  ) {
    super(factore);
  }

  originList: Array<DescriptionId> = EnumExpenseOriginFilter;

  statusList: Array<DescriptionId> = EnumExpenseStatusFilter;

  form = new FormGroup({
    dueDateStart: new FormControl(getFirstDayMonth()),
    dueDateEnd: new FormControl(getLastDayMonth()),
    status: new FormControl(),
    wallet: new FormControl(),
    paymentType: new FormControl(),
    person: new FormControl(),
    expenseCategory: new FormControl(),
    origin: new FormControl(),
  });

  override getOb(): ExpenseFilter {
    const form = this.form.controls;
    const ob = {
      dueDateStart: form.dueDateStart.value as Date,
      dueDateEnd: form.dueDateEnd.value as Date,
      status: form.status.value as DescriptionId,
      wallet: form.wallet.value as DescriptionId,
      paymentType: form.paymentType.value as DescriptionId,
      person: form.person.value as DescriptionId,
      expenseCategory: form.expenseCategory.value as DescriptionId,
      origin: form.origin.value as DescriptionId,
    };
    return ob;
  }
}
