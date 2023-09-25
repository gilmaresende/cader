import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
import {
  getFirstDayMonth,
  getLastDayMonth,
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
export class ExpenseFilterComponent extends SFilter {
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
    dueDateStart: new FormControl(getFirstDayMonth()),
    dueDateEnd: new FormControl(getLastDayMonth()),
    status: new FormControl(),
    wallet: new FormControl(),
    paymentType: new FormControl(),
    person: new FormControl(),
    expenseCategory: new FormControl(),
    origin: new FormControl(),
  });

  ob: ExpenseFilter = newExpsenseFilter();

  override getOb() {
    return this.ob;
  }
}
