import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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

  dataTableServicePaymentys: DataTableService<CashInclowPayment> =
    new DataTableService<CashInclowPayment>();

  listPayments: CashInclowPayment[] = [];

  override populatedForm(ob: CashInflow) {
    // this.form = this.formBuilder.group({
    //   id: [ob.id, Validators.required],
    //   update: [ob.update],
    //   description: [
    //     ob.description,
    //     [Validators.required, Validators.minLength(6)],
    //   ],
    //   observation: [ob.observation],
    //   dueDate: [ob.dueDate],
    //   openingDate: [ob.openingDate],
    //   valueTotal: [ob.valueTotal],
    //   amountPaid: [ob.amountPaid],
    //   openValue: [ob.openValue],
    //   wallet: [ob.wallet],
    //   incomeCategory: [ob.incomeCategory],
    //   paymentType: [ob.paymentType],
    //   person: [ob.person],
    // });

    this.listPayments = ob.payments as CashInclowPayment[];
    this.dataTableServicePaymentys.update(this.listPayments);
  }
  override getOb(): CashInflow {
    const form = this.form;
    form?.value;

    return form?.value;
  }
}
