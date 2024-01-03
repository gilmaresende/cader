import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
import {
  getFirstDayMonth,
  getFirstDayMonthYYYYMMDD,
  getLastDayMonth,
  getLastDayMonthYYYYMMDD,
} from 'src/app/core/utils/Date/date-util';
import { MovimentFilter } from 'src/app/model-filter/moviment-filter';

import { WalletService } from 'src/app/services/wallet.service';
import {
  EnumOriginMovementFilter,
  EnumTypeRevenueExpenceFilter,
} from 'src/data/combos-enum';

@Component({
  selector: 'movement-filter',
  templateUrl: './movement-filter.component.html',
  styleUrls: ['./movement-filter.component.scss'],
})
export class MovementFilterComponent extends SFilter<MovimentFilter> {
  typeList: Array<DescriptionId> = EnumTypeRevenueExpenceFilter;
  origenList: Array<DescriptionId> = EnumOriginMovementFilter;

  constructor(
    private controller: ControlService,
    public serviceWallet: WalletService
  ) {
    super(controller);
  }

  form = new FormGroup({
    movimentDateStart: new FormControl(getFirstDayMonthYYYYMMDD()),
    movimentDateEnd: new FormControl(getLastDayMonthYYYYMMDD()),
    typeRevenueExpence: new FormControl(EnumTypeRevenueExpenceFilter[0]),
    origin: new FormControl(EnumOriginMovementFilter[1]),
    wallet: new FormControl(),
  });

  getOb(): MovimentFilter {
    const form = this.form.controls;
    const ob = {
      movimentDateStart: form.movimentDateStart.value,
      movimentDateEnd: form.movimentDateEnd.value,
      typeRevenueExpence: form.typeRevenueExpence.value as DescriptionId,
      origin: form.origin.value as DescriptionId,
      wallet: form.wallet.value as DescriptionId,
    };
    return ob;
  }
}
