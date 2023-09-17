import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { Movement } from '../model/movement';

@Injectable({
  providedIn: 'root',
})
export class MovementService extends BaseHttpService<Movement> {
  override newInstance(): Movement {
    return {
      id: 0,
      description: '',
      movimentDate: new Date(),
      update: new Date(),
      origin: 1,
      typeRevenueExpence: 1,
      value: 0,
      idWallet: 0,
    };
  }
  override rote: string = 'movement';
}