import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { ExpenseCategory } from '../model/expense-category';
import { EnumYesNo } from '../core/enuns/enumSimNao';

@Injectable({
  providedIn: 'root',
})
export class ExpenseCategoryService extends BaseHttpService<ExpenseCategory> {
  override newInstance(): ExpenseCategory {
    return { name: '', id: 0, active: EnumYesNo.YES, update: new Date() };
  }
  override rote: string = 'expenseCategory';
}
