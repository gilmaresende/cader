import { Injectable } from '@angular/core';
import { ExpensePayment } from '../model/expense-payment';
import { BaseHttpService } from '../core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ExpensePaymentService extends BaseHttpService<ExpensePayment> {
  override newInstance(): ExpensePayment {
    return {
      id: 0,
      update: new Date(),
      observation: '',
      payDay: new Date(),
      value: 0,
    };
  }
  override rote: string = 'expense/expensePayment';
}
