import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { LoteOfExpenses } from '../model/lot-of-expenses';
import { getToday } from '../core/utils/Date/date-util';

@Injectable({
  providedIn: 'root',
})
export class LotOfExpensesService extends BaseHttpService<LoteOfExpenses> {
  override rote: string = 'lotOfExpense';

  override newInstance(): LoteOfExpenses {
    return { update: getToday() };
  }
  override getFilterBase(): {} {
    return {};
  }
}
