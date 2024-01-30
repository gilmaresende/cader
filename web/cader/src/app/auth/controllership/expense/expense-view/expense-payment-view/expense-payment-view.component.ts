import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { ExpensePayment } from 'src/app/model/expense-payment';
import { ExpensePaymentService } from 'src/app/services/expense-payment.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'expense-payment-view',
  templateUrl: './expense-payment-view.component.html',
  styleUrls: ['./expense-payment-view.component.scss'],
})
export class ExpensePaymentViewComponent extends SItems<
  ExpensePayment,
  ExpensePaymentService
> {
  constructor(
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    private serviceExpensePayment: ExpensePaymentService,
    private factoryCore: FactoryCoreService
  ) {
    super(serviceExpensePayment, factoryCore);
    this.populateForm({ update: new Date() });
  }

  override populateForm(ob: ExpensePayment): void {
    this.form = this.formBuilder.group({
      wallet: [ob.wallet, Validators.required],
      idExpense: [ob.idExpense, Validators.required],
      payDay: [ob.payDay, Validators.required],
      value: [ob.value, Validators.required],
      observation: [ob.observation],
      paymentType: [ob.paymentType],
    });
  }

  override getByForm(): ExpensePayment {
    const ob = this.form?.value;
    return ob;
  }
}
