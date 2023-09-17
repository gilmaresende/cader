import { Injectable } from '@angular/core';
import { Expense } from '../model/expense';
import { BaseHttpService } from '../core/services/base-http.service';
import { API_CONFIG } from 'src/environments/environments';
import { ResponseServe } from '../core/model/response-serve';
import { Observable } from 'rxjs';
import { ExpensePayment } from '../model/expense-payment';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService extends BaseHttpService<Expense> {
  override newInstance(): Expense {
    return { id: 0, update: new Date(), payments: [], description: '' };
  }
  override rote: string = 'expense';

  predictPayment(id: any): Observable<ResponseServe> {
    return this.getHttp().get<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/predictPayment/${id}`
    );
  }

  savePayment(payment: ExpensePayment): Observable<ResponseServe> {
    if (payment.id) {
      const response = this.getHttp().put<ResponseServe>(
        `${API_CONFIG.BASE_URL}/${this.rote}/newPayment/${payment.id}`,
        payment
      );
      return response;
    } else {
      return this.getHttp().post<ResponseServe>(
        `${API_CONFIG.BASE_URL}/${this.rote}/newPayment`,
        payment
      );
    }
  }
}
