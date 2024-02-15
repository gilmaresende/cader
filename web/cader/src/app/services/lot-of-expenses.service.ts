import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { LotOfExpenses } from '../model/lot-of-expenses';
import { getToday } from '../core/utils/Date/date-util';

@Injectable({
  providedIn: 'root',
})
export class LotOfExpensesService extends BaseHttpService<LotOfExpenses> {
  override rote: string = 'lotOfExpense';

  override newInstance(): LotOfExpenses {
    return { update: getToday() };
  }
  override getFilterBase(): {} {
    return {};
  }
}
