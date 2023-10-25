import { Injectable } from '@angular/core';
import { CashInflow } from '../model/cash-inflow';
import { BaseHttpService } from '../core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class CashInflowService extends BaseHttpService<CashInflow> {
  override rote: string = 'cash-inflow';

  override newInstance(): CashInflow {
    return {
      id: 0,
      update: new Date(),
      payments: [],
      description: '',
      dueDate: new Date(),
      origin: 1,
      value: 0,
    };
  }
  override getFilterBase(): {} {
    return {};
  }
}
