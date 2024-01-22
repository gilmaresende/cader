import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { CashInclowPayment } from '../model/cash-inflow-payment';
import { ResponseServe } from '../core/model/response-serve';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CashInflowPaymentService extends BaseHttpService<CashInclowPayment> {
  override newInstance(): CashInclowPayment {
    return {
      id: 0,
      update: new Date(),
      observation: '',
      payDay: new Date(),
      value: 0,
      idCashInflow: 0,
    };
  }
  override rote: string = 'cashInflowPayment';

  predictPayment(id: any): Observable<ResponseServe> {
    return this.getHttp().get<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/predictPayment/${id}`
    );
  }
  override getFilterBase(): {} {
    return {};
  }
}
