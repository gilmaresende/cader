import { Component, OnInit } from '@angular/core';
import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { ControlService } from 'src/app/core/services/control.service';
import { ExpensePayment } from 'src/app/model/expense-payment';
import { ExpensePaymentService } from 'src/app/services/expense-payment.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'expense-payment-view',
  templateUrl: './expense-payment-view.component.html',
  styleUrls: ['./expense-payment-view.component.scss'],
})
export class ExpensePaymentViewComponent
  extends SItems<ExpensePayment, ExpensePaymentService>
  implements OnInit
{
  constructor(
    private serviceModal: ModalImplService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    private controller: ControlService,
    private serviceExpensePayment: ExpensePaymentService
  ) {
    super(serviceModal, serviceExpensePayment, controller);
  }

  ngOnInit(): void {
    console.log(this.serviceModal.getOb());
  }
}
