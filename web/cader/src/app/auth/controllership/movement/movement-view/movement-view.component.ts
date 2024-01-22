import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { PagesService } from 'src/app/core/services/pages.service';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { Movement } from 'src/app/model/movement';
import { MovementService } from 'src/app/services/movement.service';
import { WalletService } from 'src/app/services/wallet.service';
import {
  ConstOriginMovement,
  EnumTypeRevenueExpence,
} from 'src/data/combos-enum';

@Component({
  selector: 'app-movement-view',
  templateUrl: './movement-view.component.html',
  styleUrls: ['./movement-view.component.scss'],
})
export class MovementViewComponent extends SPage<Movement, MovementService> {
  constructor(
    private service: MovementService,
    private activatedRoute: ActivatedRoute,
    public serviceWallet: WalletService,
    private factory: FactoryCoreService
  ) {
    super('Movimento', service, factory, activatedRoute);
  }

  typeList: Array<DescriptionId> = EnumTypeRevenueExpence;

  origem: string = 'MANUAL';

  // form = new FormGroup({
  //   id: new FormControl(0),
  //   update: new FormControl(new Date()),
  //   description: new FormControl('', Validators.required),
  //   movementDate: new FormControl(new Date()),
  //   origin: new FormControl(ConstOriginMovement.MANUAL),
  //   typeRevenueExpence: new FormControl(),
  //   value: new FormControl(0),
  //   wallet: new FormControl(),
  // });

  override populatedForm(ob: Movement) {
    const data = this.form.controls;
    // data.id.setValue(ob.id!);
    // data.update.setValue(ob.update);
    // data.description.setValue(ob.description);
    // data.movementDate.setValue(ob.movementDate);

    // data.origin.setValue(ob.origin);
    // data.typeRevenueExpence.setValue(ob.typeRevenueExpence);
    // data.value.setValue(ob.value);
    // data.wallet.setValue(ob.wallet);
  }

  override getOb(): Movement {
    const form = this.form.controls;
    // console.log(form.origin.value);
    // const ob: Movement = {
    //   id: form.id.value as number,
    //   update: form.update.value as Date,
    //   description: form.description.value as string,
    //   movementDate: form.movementDate.value as Date,
    //   origin: form.origin.value as DescriptionId,
    //   typeRevenueExpence: form.typeRevenueExpence.value as DescriptionId,
    //   value: form.value.value as number,
    //   wallet: form.wallet.value as DescriptionId,
    // };
    // this.origem = (form.origin.value as DescriptionId).description;
    //return ob;
    return this.service.newInstance();
  }
}
