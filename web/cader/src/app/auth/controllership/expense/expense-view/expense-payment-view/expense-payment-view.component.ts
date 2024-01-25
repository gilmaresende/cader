import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { PagesService } from 'src/app/core/services/pages.service';
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
    private serviceModal: ModalImplService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    private controller: PagesService,
    private serviceExpensePayment: ExpensePaymentService
  ) {
    super(serviceModal, serviceExpensePayment, controller);
  }

  form = new FormGroup({
    id: new FormControl(0),
    idExpense: new FormControl(0),
    update: new FormControl(new Date()),
    observation: new FormControl(''),
    payDay: new FormControl(new Date()),
    value: new FormControl(),
    wallet: new FormControl(),
    paymentType: new FormControl(),
  });

  override populateForm(ob: ExpensePayment): void {
    const data = this.form.controls;
    data.id.setValue(ob.id!);
    data.idExpense.setValue(ob.idExpense!);
    data.update.setValue(ob.update);
    data.observation.setValue(ob.observation);
    data.payDay.setValue(ob.payDay);
    data.value.setValue(ob.value);
    data.wallet.setValue(ob.wallet);
    data.paymentType.setValue(ob.paymentType);
  }

  override getByForm(): ExpensePayment {
    const form = this.form.controls;
    const ob: ExpensePayment = {
      id: form.id.value as number,
      update: form.update.value as Date,
      value: form.value.value as number,
      paymentType: form.paymentType.value as DescriptionId,
      wallet: form.wallet.value as DescriptionId,
      payDay: form.payDay.value as Date,
      observation: form.observation.value as string,
      idExpense: form.idExpense.value as number,
    };
    return ob;
  }
}
