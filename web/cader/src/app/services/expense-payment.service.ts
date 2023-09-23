import { Injectable } from '@angular/core';
import { ExpensePayment } from '../model/expense-payment';
import { BaseHttpService } from '../core/services/base-http.service';
import { ResponseServe } from '../core/model/response-serve';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/environments/environments';

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

  predictPayment(id: any): Observable<ResponseServe> {
    return this.getHttp().get<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/predictPayment/${id}`
    );
  }
  override getFilterBase(): {} {
    return {};
  }
}
