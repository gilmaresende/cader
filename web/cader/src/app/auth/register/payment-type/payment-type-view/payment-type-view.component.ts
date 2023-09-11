import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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
    private controller: ControlService,
    private service: PaymentTypeService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Meio de Pagamento', controller, service, activatedRoute);
  }
}
