import { Component, Input } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'expense-payment',
  templateUrl: './expense-payment.component.html',
  styleUrls: ['./expense-payment.component.scss'],
})
export class ExpensePaymentComponent {
  constructor(public controller: ControlService) {}

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
}
