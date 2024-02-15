import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/components/prime/toast/toast.service';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { PagesService } from 'src/app/core/services/pages.service';
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
    private controller: PagesService,
    public cardService: CardService,
    public service: CardInvoiceService,
    private factory: FactoryCoreService,
    private toastService: ToastService,
    private actRote: ActivatedRoute
  ) {
    super('Fatura cartão', service, factory, actRote);
  }

  listLaunches: Array<CardInvoiceLaunch> = [];

  override populatedForm(ob: CardInvoice) {
    this.form = this.formBuilder.group({
      dueDate: [ob.dueDate, Validators.required],
      closedDate: [ob.closedDate, Validators.required],
      card: [ob.card],
      value: [ob.value],
      valueLaunches: [ob.valueLaunches],
      refundValue: [ob.refundValue],
    });
    this.listLaunches = ob.launches;
  }

  override getOb(): CardInvoice {
    const ob: CardInvoice = this.form?.value;
    ob.launches = this.listLaunches;
    return ob;
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
    return this.form.value.value;
  }

  getRefundValue() {
    return this.form.value.refundValue;
  }

  getValueLaunches() {
    return this.form.value.valueLaunches;
  }
}
