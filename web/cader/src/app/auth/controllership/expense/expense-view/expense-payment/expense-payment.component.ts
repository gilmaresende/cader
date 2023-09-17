import { Component, Input, OnInit } from '@angular/core';
import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { ControlService } from 'src/app/core/services/control.service';
import { ExpensePaymentService } from 'src/app/services/expense-payment.service';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'expense-payment',
  templateUrl: './expense-payment.component.html',
  styleUrls: ['./expense-payment.component.scss'],
})
export class ExpensePaymentComponent implements OnInit {
  constructor(
    public controller: ControlService,
    private serviceExpensePayment: ExpensePaymentService,
    private serviceModel: ModalImplService
  ) {}
  ngOnInit(): void {
    this.serviceModel.setTitle('Pagamento');
    this.serviceModel.setFunctionNewItem(this.newExpensePayment);
  }

  @Input() listPayments: Array<any> = [];

  header: Array<{ description: string; percentage: number }> = [
    { description: 'Carteira', percentage: 25 },
    { description: 'Meio Pagamento', percentage: 25 },
    { description: 'Data', percentage: 20 },
    { description: 'Valor', percentage: 20 },
  ];
  atributos = ['wallet', 'paymentType', 'payDay', 'value'];

  loading() {
    this.serviceModel.clear();
    this.serviceExpensePayment
      .findById(this.controller.getObSelect()?.id)
      .subscribe({
        next: (res) => {
          this.serviceModel.setOb(res.data);
          this.serviceModel.show();
          this.serviceModel.disabledTrue();
        },
        error: (error) => console.log(error),
      });
  }

  newExpensePayment() {
    this.serviceModel.clear();
    this.serviceExpensePayment
      .predictPayment(this.controller.getOb()!.id)
      .subscribe({
        next: (res) => {
          this.serviceModel.setOb(res.data);
          this.serviceModel.show();
          this.serviceModel.disabledFalse();
        },
        error: (error) => console.log(error),
      });
  }
}
