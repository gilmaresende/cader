import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { PersonService } from 'src/app/services/person.service';
import { WalletService } from 'src/app/services/wallet.service';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'lot-of-expense-model',
  templateUrl: './lot-of-expense-model.component.html',
  styleUrls: ['./lot-of-expense-model.component.scss'],
})
export class LotOfExpenseModelComponent {
  @Input() form?: FormGroup;
  @Input() isDisabled?: ObservableElement;

  constructor(
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceExpenseCategory: ExpenseCategoryService
  ) {}
}
