import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
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
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    private serviceCashInflowPayment: CashInflowPaymentService,
    private factoryCore: FactoryCoreService
  ) {
    super(serviceCashInflowPayment, factoryCore);
  }

  override populateForm(ob: CashInclowPayment): void {
    this.form = this.formBuilder.group({
      wallet: [ob.wallet, Validators.required],
      idCashInflow: [ob.idCashInflow, Validators.required],
      payDay: [ob.payDay, Validators.required],
      value: [ob.value, Validators.required],
      observation: [ob.observation],
      paymentType: [ob.paymentType],
    });
  }

  override getByForm(): CashInclowPayment {
    const ob = this.form?.value;
    return ob;
  }
}
