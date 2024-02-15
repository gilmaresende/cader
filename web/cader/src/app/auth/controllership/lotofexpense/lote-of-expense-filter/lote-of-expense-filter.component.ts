import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from 'src/app/core/utils/Date/date-util';
import {
  LoteOfExpenseFilter,
  newLoteOfExpsenseFilter,
} from 'src/app/model/filters';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { PersonService } from 'src/app/services/person.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'lote-of-expense-filter',
  templateUrl: './lote-of-expense-filter.component.html',
  styleUrls: ['./lote-of-expense-filter.component.scss'],
})
export class LoteOfExpenseFilterComponent extends SFilter<LoteOfExpenseFilter> {
  constructor(
    private factore: FactoryCoreService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceExpenseCategory: ExpenseCategoryService
  ) {
    super(factore);
  }

  override getOb(): LoteOfExpenseFilter {
    const form = this.form.controls;
    const ob = {
      dueDateStart: form.dueDateStart.value as Date,
      dueDateEnd: form.dueDateEnd.value as Date,
      wallet: form.wallet.value as DescriptionId,
      paymentType: form.paymentType.value as DescriptionId,
      person: form.person.value as DescriptionId,
      expenseCategory: form.expenseCategory.value as DescriptionId,
    };
    return ob;
  }

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
}
