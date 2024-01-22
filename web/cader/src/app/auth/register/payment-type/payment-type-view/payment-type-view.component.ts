import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumYesNo } from 'src/app/core/enuns/enumSimNao';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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

  // form = new FormGroup({
  //   id: new FormControl(0),
  //   name: new FormControl('', Validators.required),
  //   active: new FormControl(EnumYesNo.YES),
  //   update: new FormControl(new Date()),
  // });

  override populatedForm(ob: PaymentType) {
    // const data = this.form.controls;
    // data.active.setValue(ob.active);
    // data.name.setValue(ob.name);
    // data.update.setValue(ob.update);
    // data.id.setValue(ob.id!);
  }

  override getOb(): PaymentType {
    // const form = this.form.controls;
    // const ob: PaymentType = {
    //   id: form.id.value as number,
    //   active: form.active.value as number,
    //   name: form.name.value as string,
    //   update: form.update.value as Date,
    // };
    // return ob;
    return this.service.newInstance();
  }
}
