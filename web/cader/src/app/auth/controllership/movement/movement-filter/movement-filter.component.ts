import { Component, OnChanges } from '@angular/core';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
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
  typeList: Array<{ id?: number; name: string }> = [
    { id: undefined, name: 'Todos' },
    { id: 1, name: 'Despesa' },
    { id: 0, name: 'Receita' },
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
}
