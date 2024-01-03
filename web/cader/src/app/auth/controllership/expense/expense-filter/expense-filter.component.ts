import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
import {
  getFirstDayMonth,
  getFirstDayMonthYYYYMMDD,
  getLastDayMonth,
  getLastDayMonthYYYYMMDD,
} from 'src/app/core/utils/Date/date-util';
import {
  ExpenseFilter,
  newExpsenseFilter,
} from 'src/app/model-filter/expense-filter';
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
    private controller: ControlService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceExpenseCategory: ExpenseCategoryService
  ) {
    super(controller);
  }

  originList: Array<DescriptionId> = EnumExpenseOriginFilter;

  statusList: Array<DescriptionId> = EnumExpenseStatusFilter;

  form = new FormGroup({
    dueDateStart: new FormControl(getFirstDayMonthYYYYMMDD()),
    dueDateEnd: new FormControl(getLastDayMonthYYYYMMDD()),
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
      dueDateStart: form.dueDateStart.value,
      dueDateEnd: form.dueDateEnd.value,
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
