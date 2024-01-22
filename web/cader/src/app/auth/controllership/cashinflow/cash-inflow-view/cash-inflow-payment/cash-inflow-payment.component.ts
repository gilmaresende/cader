import { Component, OnInit, Input } from '@angular/core';
import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { ToastService } from 'src/app/components/prime/toast/toast.service';
import { PagesService } from 'src/app/core/services/pages.service';
import { CashInflow } from 'src/app/model/cash-inflow';
import { CashInclowPayment } from 'src/app/model/cash-inflow-payment';
import { CashInflowPaymentService } from 'src/app/services/cash-inflow-payment.service';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'cash-inflow-payment',
  templateUrl: './cash-inflow-payment.component.html',
  styleUrls: ['./cash-inflow-payment.component.scss'],
})
export class CashInflowPaymentComponent implements OnInit {
  constructor(
    public controller: PagesService,
    private serviceCashInflowPayment: CashInflowPaymentService,
    private serviceModel: ModalImplService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.serviceModel.setTitle('Pagamento');
  }

  @Input() dataTableServicePaymentys?: DataTableService<CashInclowPayment>;

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
    this.serviceCashInflowPayment
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

  //chama api para prever o valor em aberto da receita
  newExpensePayment() {
    this.controller.loading.showLoading();
    this.serviceModel.clear();
    this.serviceCashInflowPayment
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
