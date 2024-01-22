import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlService } from 'src/app/core/services/control.service';
import { IncomeCategoryService } from 'src/app/services/income-category.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { PersonService } from 'src/app/services/person.service';
import { WalletService } from 'src/app/services/wallet.service';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'cash-inflow-detail',
  templateUrl: './cash-inflow-detail.component.html',
  styleUrls: ['./cash-inflow-detail.component.scss'],
})
export class CashInflowDetailComponent {
  constructor(
    public controller: ControlService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceIncomeCategory: IncomeCategoryService
  ) {}

  @Input() isDisabled?: ObservableElement;
  @Input() form!: FormGroup;
}
