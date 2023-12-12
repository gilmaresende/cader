import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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
    private controller: ControlService,
    private service: CashInflowService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Entrada de Caixa', controller, service, activatedRoute);
  }

  dataTableServicePaymentys: DataTableService<CashInclowPayment> =
    new DataTableService<CashInclowPayment>();

  listPayments: CashInclowPayment[] = [];

  form = new FormGroup({
    id: new FormControl(0),
    update: new FormControl(new Date()),
    description: new FormControl('', Validators.required),
    observation: new FormControl(''),
    dueDate: new FormControl(new Date()),
    openingDate: new FormControl(new Date()),
    valueTotal: new FormControl(0),
    openValue: new FormControl(0),
    amountPaid: new FormControl(0),
    incomeCategory: new FormControl(),
    paymentType: new FormControl(),
    wallet: new FormControl(),
    person: new FormControl(),
  });

  override populatedForm(ob: CashInflow) {
    const data = this.form.controls;
    data.id.setValue(ob.id!);
    data.update.setValue(ob.update);
    data.description.setValue(ob.description);
    data.observation.setValue(ob.observation);
    data.dueDate.setValue(ob.dueDate);
    data.openingDate.setValue(ob.openingDate);
    data.valueTotal.setValue(ob.valueTotal);
    data.amountPaid.setValue(ob.amountPaid as number);
    data.openValue.setValue(ob.openValue as number);
    data.wallet.setValue(ob.wallet);
    data.incomeCategory.setValue(ob.incomeCategory);
    data.paymentType.setValue(ob.paymentType);
    data.person.setValue(ob.person);
    this.listPayments = ob.payments as CashInclowPayment[];
    this.dataTableServicePaymentys.update(this.listPayments);
  }
  override getOb(): CashInflow {
    const form = this.form.controls;
    const ob: CashInflow = {
      id: form.id.value as number,
      update: form.update.value as Date,
      description: form.description.value as string,
      dueDate: form.dueDate.value as Date,
      openingDate: form.openingDate.value as Date,
      valueTotal: form.valueTotal.value as number,
      incomeCategory: form.incomeCategory.value as DescriptionId,
      paymentType: form.paymentType.value as DescriptionId,
      wallet: form.wallet.value as DescriptionId,
      person: form.person.value as DescriptionId,
      observation: form.observation.value as string,
    };
    return ob;
  }
}
