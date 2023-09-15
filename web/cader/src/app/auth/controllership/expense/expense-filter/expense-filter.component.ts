import { Component } from '@angular/core';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
import {
  ExpenseFilter,
  newExpsenseFilter,
} from 'src/app/model-filter/expense-filter';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { PersonService } from 'src/app/services/person.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'expense-filter',
  templateUrl: './expense-filter.component.html',
  styleUrls: ['./expense-filter.component.scss'],
})
export class ExpenseFilterComponent extends SFilter {
  statusList: Array<{ id?: number; name: string }> = [
    { id: undefined, name: 'Todos' },
    { id: 0, name: 'Abertos' },
    { id: 1, name: 'Liquidados' },
    { id: 3, name: 'Parcial' },
    { id: 2, name: 'Abertos/Parcial' },
  ];

  constructor(
    private controller: ControlService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceExpenseCategory: ExpenseCategoryService
  ) {
    super(controller);
  }

  ob: ExpenseFilter = newExpsenseFilter();

  override getOb() {
    return this.ob;
  }
}
