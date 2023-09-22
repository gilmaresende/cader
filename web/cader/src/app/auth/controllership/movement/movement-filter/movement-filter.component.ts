import { Component, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from 'src/app/core/utils/Date/date-util';
import {
  MovimentFilter,
  newMovement,
} from 'src/app/model-filter/moviment-filter';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'movement-filter',
  templateUrl: './movement-filter.component.html',
  styleUrls: ['./movement-filter.component.scss'],
})
export class MovementFilterComponent extends SFilter {
  typeList: Array<{ id: number; name: string }> = [
    { id: 0, name: 'Todos' },
    { id: 1, name: 'Despesa' },
    { id: 2, name: 'Receita' },
  ];

  origenList: Array<{ id?: number; name: string }> = [
    { id: undefined, name: 'Todos' },
    { id: 0, name: 'Manual' },
    { id: 1, name: 'Despesa' },
    { id: 2, name: 'Transfêrencia' },
    { id: 3, name: 'Receita' },
  ];
  constructor(
    private controller: ControlService,
    public serviceWallet: WalletService
  ) {
    super(controller);
  }

  ob: MovimentFilter = newMovement();

  override getOb() {
    return this.ob;
  }

  form = new FormGroup({
    movimentDateStart: new FormControl(getFirstDayMonth()),
    movimentDateEnd: new FormControl(getLastDayMonth()),
    typeRevenueExpence: new FormControl(0),
    origin: new FormControl(0),
    idWallet: new FormControl(0),
  });

  getObF(): any {
    const form = this.form.controls;
    const ob = {
      movimentDateStart: form.movimentDateStart.value as Date,
      movimentDateEnd: form.movimentDateEnd.value as Date,
      typeRevenueExpence: form.typeRevenueExpence.value as number,
      origin: form.origin.value as number,
      idWallet: form.idWallet.value as number,
    };
    return ob;
  }

  show() {
    console.log(this.getObF());
  }
}
