import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlService } from 'src/app/core/services/control.service';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { PersonService } from 'src/app/services/person.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss'],
})
export class ExpenseDetailComponent {
  constructor(
    public controller: ControlService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceExpenseCategory: ExpenseCategoryService
  ) {}

  @Input() isDisabled: boolean = true;

  @Input() form!: FormGroup;
}
