import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PagesService } from 'src/app/core/services/pages.service';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { PersonService } from 'src/app/services/person.service';
import { WalletService } from 'src/app/services/wallet.service';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss'],
})
export class ExpenseDetailComponent {
  constructor(
    public controller: PagesService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceExpenseCategory: ExpenseCategoryService
  ) {}

  @Input() isDisabled?: ObservableElement;

  @Input() form!: FormGroup;
}
