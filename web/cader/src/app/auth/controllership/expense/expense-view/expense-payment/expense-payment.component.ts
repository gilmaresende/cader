import { Component, Input } from '@angular/core';
import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { ControlService } from 'src/app/core/services/control.service';
import { ExpensePayment } from 'src/app/model/expense-payment';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'expense-payment',
  templateUrl: './expense-payment.component.html',
  styleUrls: ['./expense-payment.component.scss'],
})
export class ExpensePaymentComponent {
  constructor(
    public controller: ControlService,
    private serviceExpense: ExpenseService,
    private serviceModel: ModalImplService
  ) {}

  @Input() listPayments: Array<any> = [];

  header: Array<{ description: string; percentage: number }> = [
    { description: 'Carteira', percentage: 25 },
    { description: 'Meio Pagamento', percentage: 25 },
    { description: 'Data', percentage: 20 },
    { description: 'Valor', percentage: 20 },
  ];
  atributos = ['wallet', 'paymentType', 'payDay', 'value'];

  loading() {
    console.log(this.controller.getObSelect());
  }

  newExpensePayment() {
    this.serviceExpense.predictPayment(this.controller.getOb()!.id).subscribe({
      next: (res) => {
        console.log(res);
        this.serviceModel.setTitle('Pagamento');
        this.serviceModel.setOb(res.data);
        this.serviceModel.setfunctionSave(this.save);

        this.serviceModel.show();
      },
      error: (error) => console.log(error),
    });
  }

  save() {
    console.log(this.serviceModel.ob);
  }
}
