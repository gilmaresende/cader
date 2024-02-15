import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { CardInvoice } from '../model/card-invoice';
import { Observable } from 'rxjs';
import { ResponseServe } from '../core/model/response-serve';
import { API_CONFIG } from 'src/environments/environments';
import { getToday } from '../core/utils/Date/date-util';

@Injectable({
  providedIn: 'root',
})
export class CardInvoiceService extends BaseHttpService<CardInvoice> {
  override rote: string = 'cardInvoice';

  override newInstance(): CardInvoice {
    return {
      closedDate: getToday(),
      launches: [],
      refundValue: 0,
      value: 0,
      valueLaunches: 0,
      update: getToday(),
    };
  }
  override getFilterBase(): {} {
    throw new Error('Method not implemented.');
  }

  findLaunches(filter: any): Observable<ResponseServe> {
    return this.getHttp().post<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/findLaunches`,
      filter
    );
  }
}
