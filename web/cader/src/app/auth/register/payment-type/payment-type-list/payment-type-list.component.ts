import { Component } from '@angular/core';
import { SPageList } from 'src/app/core/pages/spage/super-page-list';
import { ControlService } from 'src/app/core/services/control.service';
import { PaymentType } from 'src/app/model/payment-type';
import { PaymentTypeService } from 'src/app/services/payment-type.service';

@Component({
  selector: 'app-payment-type-list',
  templateUrl: './payment-type-list.component.html',
  styleUrls: ['./payment-type-list.component.scss'],
})
export class PaymentTypeListComponent extends SPageList<
  PaymentType,
  PaymentTypeService
> {
  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Nome',
      percentage: 90,
    },
  ];
  atributos: Array<string> = ['name'];

  constructor(
    private controller: ControlService,
    private service: PaymentTypeService
  ) {
    super('Lista Meio de Pagamento', controller, service);
  }
}
