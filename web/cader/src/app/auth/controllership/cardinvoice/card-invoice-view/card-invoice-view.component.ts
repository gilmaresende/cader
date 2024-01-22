import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/components/prime/toast/toast.service';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { CardInvoice } from 'src/app/model/card-invoice';
import { CardInvoiceLaunch } from 'src/app/model/card-invoice-launch';
import { CardInvoiceService } from 'src/app/services/card-invoice.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-invoice-view',
  templateUrl: './card-invoice-view.component.html',
  styleUrls: ['./card-invoice-view.component.scss'],
})
export class CardInvoiceViewComponent extends SPage<
  CardInvoice,
  CardInvoiceService
> {
  constructor(
    private controller: ControlService,
    public cardService: CardService,
    public service: CardInvoiceService,
    private factory: FactoryCoreService,
    private toastService: ToastService,
    private actRote: ActivatedRoute
  ) {
    super('Fatura cartão', service, factory, actRote);
  }

  listLaunches: Array<CardInvoiceLaunch> = [];

  // form = new FormGroup({
  //   id: new FormControl(0),
  //   update: new FormControl(new Date()),
  //   closedDate: new FormControl(new Date()),
  //   dueDate: new FormControl(new Date()),
  //   value: new FormControl(0),
  //   refundValue: new FormControl(0),
  //   valueLaunches: new FormControl(0),
  //   card: new FormControl(),
  // });

  override populatedForm(ob: CardInvoice) {
    const data = this.form.controls;
    // data.id.setValue(ob.id!);
    // data.update.setValue(ob.update);
    // data.dueDate.setValue(ob.dueDate);
    // data.closedDate.setValue(ob.closedDate);
    // data.card.setValue(ob.card);
    // data.value.setValue(ob.value);
    // data.valueLaunches.setValue(ob.valueLaunches);
    // data.refundValue.setValue(ob.refundValue);
    this.listLaunches = ob.launches;
  }

  override getOb(): CardInvoice {
    const form = this.form.controls;
    // const ob: CardInvoice = {
    //   id: form.id.value as number,
    //   card: form.card.value,
    //   closedDate: form.closedDate.value as Date,
    //   dueDate: form.dueDate.value as Date,
    //   launches: this.listLaunches,
    //   update: form.update.value as Date,
    //   value: form.value.value as number,
    //   refundValue: form.refundValue.value as number,
    //   valueLaunches: form.valueLaunches.value as number,
    // };
    // return ob;
    return this.service.newInstance();
  }

  findLauches() {
    this.controller.loading.showLoading();
    this.service.findLaunches(this.getOb()).subscribe({
      next: (res) => {
        this.populatedForm(res.data);
        this.controller.loading.dropLoading();
      },
      error: (error) => {
        this.toastService.catchErro(error);
        this.controller.loading.dropLoading();
      },
    });
  }

  getValueTotal() {
    return 0; //gftodo
    // return this.form.controls.value.value;
  }

  getRefundValue() {
    return 0; //gftodo
    //   return this.form.controls.refundValue.value;
  }

  getValueLaunches() {
    return 0; //gftodo
    //  return this.form.controls.valueLaunches.value;
  }
}
