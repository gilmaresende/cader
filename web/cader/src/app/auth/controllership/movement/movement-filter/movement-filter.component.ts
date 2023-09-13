import { Component, OnChanges } from '@angular/core';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
import {
  MovimentFilter,
  newMovement,
} from 'src/app/model-filter/moviment-filter';

@Component({
  selector: 'movement-filter',
  templateUrl: './movement-filter.component.html',
  styleUrls: ['./movement-filter.component.scss'],
})
export class MovementFilterComponent extends SFilter {
  constructor(controller: ControlService) {
    super(controller);
  }

  ob: MovimentFilter = newMovement();

  override getOb() {
    return this.ob;
  }
}
