import { Component, DoCheck, OnInit } from '@angular/core';
import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { ExpensePayment } from 'src/app/model/expense-payment';
import { ExpenseService } from 'src/app/services/expense.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'expense-payment-view',
  templateUrl: './expense-payment-view.component.html',
  styleUrls: ['./expense-payment-view.component.scss'],
})
export class ExpensePaymentViewComponent extends SItems implements OnInit {
  isDisabled: boolean = false;

  constructor(
    public serviceModal: ModalImplService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    private serviceExpense: ExpenseService
  ) {
    super(serviceModal);
  }

  ngOnInit(): void {
    console.log(this.serviceModal.getOb());
  }

  savePayment() {
    console.log('to going save');
    this.serviceExpense.savePayment(this.serviceModal.getOb()).subscribe({
      next: (res) => console.log(res),
      error: (er) => console.log(er),
    });
  }
}
