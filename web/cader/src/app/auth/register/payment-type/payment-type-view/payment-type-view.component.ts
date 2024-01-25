import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { PaymentType } from 'src/app/model/payment-type';
import { PaymentTypeService } from 'src/app/services/payment-type.service';

@Component({
  selector: 'app-payment-type-view',
  templateUrl: './payment-type-view.component.html',
  styleUrls: ['./payment-type-view.component.scss'],
})
export class PaymentTypeViewComponent extends SPage<
  PaymentType,
  PaymentTypeService
> {
  constructor(
    private service: PaymentTypeService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Meio de Pagamento', service, factory, actRote);
  }

  override populatedForm(ob: PaymentType) {
    this.form = this.formBuilder.group({
      name: [ob.name, Validators.required],
      active: [ob.active],
    });
  }

  override getOb(): PaymentType {
    const form = this.form?.value;
    return form;
  }
}
