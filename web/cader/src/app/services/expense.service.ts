import { Injectable } from '@angular/core';
import { Expense } from '../model/expense';
import { BaseHttpService } from '../core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService extends BaseHttpService<Expense> {
  override newInstance(): Expense {
    return { id: 0, update: new Date(), payments: [], description: '' };
  }
  override rote: string = 'expense';
}
