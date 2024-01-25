import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { CashInflow } from 'src/app/model/cash-inflow';
import { CashInclowPayment } from 'src/app/model/cash-inflow-payment';
import { CashInflowService } from 'src/app/services/cash-inflow.service';

@Component({
  selector: 'app-cash-inflow-view',
  templateUrl: './cash-inflow-view.component.html',
  styleUrls: ['./cash-inflow-view.component.scss'],
})
export class CashInflowViewComponent extends SPage<
  CashInflow,
  CashInflowService
> {
  pages = ['Detalhes', 'Pagamentos'];

  constructor(
    private service: CashInflowService,
    private factoryService: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Entrada de Caixa', service, factoryService, actRote);
  }

  dataTableServicePaymentys!: DataTableService<CashInclowPayment>;
  listPayments!: CashInclowPayment[];

  override instanceList(): void {
    this.dataTableServicePaymentys = new DataTableService<CashInclowPayment>();
    this.listPayments = [];
  }

  override populatedForm(ob: CashInflow) {
    this.form = this.formBuilder.group({
      description: [ob.description, Validators.required],
      dueDate: [ob.dueDate, Validators.required],
      openingDate: [ob.openingDate, Validators.required],
      openValue: [ob.openValue],
      origin: [ob.origin],
      valueTotal: [ob.valueTotal],
      amountPaid: [ob.amountPaid],
      paymentType: [ob.paymentType],
      incomeCategory: [ob.incomeCategory],
      wallet: [ob.wallet],
      person: [ob.person],
      observation: [ob.observation],
    });

    this.dataTableServicePaymentys.update(ob.payments as CashInclowPayment[]);
  }
  override getOb(): CashInflow {
    const ob = this.form?.value;
    return ob;
  }
}
