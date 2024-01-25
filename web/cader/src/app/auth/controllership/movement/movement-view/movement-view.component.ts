import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { Movement } from 'src/app/model/movement';
import { MovementService } from 'src/app/services/movement.service';
import { WalletService } from 'src/app/services/wallet.service';
import { EnumTypeRevenueExpence } from 'src/data/combos-enum';

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

  override populatedForm(ob: Movement) {
    this.form = this.formBuilder.group({
      description: [ob.description, Validators.required],
      movementDate: [ob.movementDate, Validators.required],
      value: [ob.value, Validators.required],
      origin: [ob.origin],
      typeRevenueExpence: [ob.typeRevenueExpence],
      wallet: [ob.wallet, Validators.required],
    });
  }

  override getOb(): Movement {
    const form = this.form?.value;
    return form;
  }
}
