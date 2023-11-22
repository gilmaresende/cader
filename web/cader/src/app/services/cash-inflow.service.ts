import { Injectable } from '@angular/core';
import { CashInflow } from '../model/cash-inflow';
import { BaseHttpService } from '../core/services/base-http.service';
import { newCashInflowFilter } from '../model-filter/cash-inflow-filter';

@Injectable({
  providedIn: 'root',
})
export class CashInflowService extends BaseHttpService<CashInflow> {
  override rote: string = 'cashInflow';

  override newInstance(): CashInflow {
    return {
      id: 0,
      update: new Date(),
      payments: [],
      description: '',
      dueDate: new Date(),
      origin: 1,
      valueTotal: 0,
      observation: '',
    };
  }

  override getFilterBase(): {} {
    return newCashInflowFilter();
  }
}
