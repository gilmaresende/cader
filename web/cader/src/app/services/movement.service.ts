import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { newMovementFilter } from '../model-filter/moviment-filter';
import { Movement } from '../model/movement';
import { ConstOriginMovement } from 'src/data/combos-enum';

@Injectable({
  providedIn: 'root',
})
export class MovementService extends BaseHttpService<Movement> {
  override newInstance(): Movement {
    return {
      id: 0,
      description: '',
      movementDate: new Date(),
      update: new Date(),
      origin: ConstOriginMovement.MANUAL,
      typeRevenueExpence: { id: 0, description: '' },
      value: 0,
      wallet: { id: 0, description: '' },
    };
  }
  override rote: string = 'movement';
  override getFilterBase(): {} {
    return newMovementFilter();
  }
}
