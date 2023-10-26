import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { ControlService } from 'src/app/core/services/control.service';
import { CashInclowPayment } from 'src/app/model/cash-inflow-payment';
import { CashInflowPaymentService } from 'src/app/services/cash-inflow-payment.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'cash-inflow-payment-view',
  templateUrl: './cash-inflow-payment-view.component.html',
  styleUrls: ['./cash-inflow-payment-view.component.scss'],
})
export class CashInflowPaymentViewComponent extends SItems<
  CashInclowPayment,
  CashInflowPaymentService
> {
  constructor(
    private serviceModal: ModalImplService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    private controller: ControlService,
    private serviceCashInflowPayment: CashInflowPaymentService
  ) {
    super(serviceModal, serviceCashInflowPayment, controller);
  }

  form = new FormGroup({
    id: new FormControl(0),
    idCashInflow: new FormControl(0),
    update: new FormControl(new Date()),
    observation: new FormControl(''),
    payDay: new FormControl(new Date()),
    value: new FormControl(),
    wallet: new FormControl(),
    paymentType: new FormControl(),
  });

  override populateForm(ob: CashInclowPayment): void {
    const data = this.form.controls;
    data.id.setValue(ob.id!);
    data.idCashInflow.setValue(ob.idCashInflow!);
    data.update.setValue(ob.update);
    data.observation.setValue(ob.observation);
    data.payDay.setValue(ob.payDay);
    data.value.setValue(ob.value);
    data.wallet.setValue(ob.wallet);
    data.paymentType.setValue(ob.paymentType);
  }

  override getByForm(): CashInclowPayment {
    const form = this.form.controls;
    const ob: CashInclowPayment = {
      id: form.id.value as number,
      update: form.update.value as Date,
      value: form.value.value as number,
      paymentType: form.paymentType.value as DescriptionId,
      wallet: form.wallet.value as DescriptionId,
      payDay: form.payDay.value as Date,
      observation: form.observation.value as string,
      idCashInflow: form.idCashInflow.value as number,
    };
    return ob;
  }
}
