import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { Expense } from '../model/expense';
import { newExpsenseFilter } from '../model-filter/expense-filter';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService extends BaseHttpService<Expense> {
  override rote: string = 'expense';

  override newInstance(): Expense {
    return {
      id: 0,
      update: new Date(),
      payments: [],
      description: '',
      dueDate: new Date(),
      value: 0,
    };
  }
  override getFilterBase(): {} {
    return newExpsenseFilter();
  }
}
