import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService extends BaseHttpService<Expense> {
  override newInstance(): Expense {
    return { id: 0, update: new Date(), payments: [], description: '' };
  }
  override rote: string = 'expense';
}
