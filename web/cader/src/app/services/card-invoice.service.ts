import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { CardInvoice } from '../model/card-invoice';

@Injectable({
  providedIn: 'root',
})
export class CardInvoiceService extends BaseHttpService<CardInvoice> {
  override rote: string = 'cardInvoice';

  override newInstance(): CardInvoice {
    throw new Error('Method not implemented.');
  }
  override getFilterBase(): {} {
    throw new Error('Method not implemented.');
  }
}
