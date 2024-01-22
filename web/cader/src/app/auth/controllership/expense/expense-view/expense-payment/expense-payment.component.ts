import { Component, Input, OnInit } from '@angular/core';
import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { ToastService } from 'src/app/components/prime/toast/toast.service';
import { ControlService } from 'src/app/core/services/control.service';
import { ExpensePayment } from 'src/app/model/expense-payment';
import { ExpensePaymentService } from 'src/app/services/expense-payment.service';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'expense-payment',
  templateUrl: './expense-payment.component.html',
  styleUrls: ['./expense-payment.component.scss'],
})
export class ExpensePaymentComponent implements OnInit {
  constructor(
    public controller: ControlService,
    private serviceExpensePayment: ExpensePaymentService,
    private serviceModel: ModalImplService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.serviceModel.setTitle('Pagamento');
  }

  

  @Input() dataTableServicePaymentys?: DataTableService<ExpensePayment>;

  @Input() listPayments: Array<any> = [];
  @Input() isDisabled?: ObservableElement;

  header: Array<{ description: string; percentage: number }> = [
    { description: 'Carteira', percentage: 25 },
    { description: 'Meio Pagamento', percentage: 25 },
    { description: 'Data', percentage: 20 },
    { description: 'Valor', percentage: 20 },
  ];
  atributos = ['wallet', 'paymentType', 'payDay', 'value'];

  //chama a api para carregar um registro de pagamento no model
  loading() {
    this.controller.loading.showLoading();
    this.serviceModel.clear();
    this.serviceExpensePayment
      .findById(this.controller.getObSelect()?.id)
      .subscribe({
        next: (res) => {
          this.serviceModel.setOb(res.data);
          this.serviceModel.show();
          this.serviceModel.disabledFalse();
          this.controller.loading.dropLoading();
        },
        error: (error) => {
          this.toastService.catchErro(error);
          this.controller.loading.dropLoading();
        },
      });
  }

  //chama api para prever o valor em aberto da despesa
  newExpensePayment() {
    this.controller.loading.showLoading();
    this.serviceModel.clear();
    this.serviceExpensePayment
      .predictPayment(this.controller.getOb()!.id)
      .subscribe({
        next: (res) => {
          this.serviceModel.setOb(res.data);
          this.serviceModel.show();
          this.serviceModel.disabledTrue();
          this.controller.loading.dropLoading();
        },
        error: (error) => {
          this.toastService.catchErro(error);
          this.controller.loading.dropLoading();
        },
      });
  }
}
