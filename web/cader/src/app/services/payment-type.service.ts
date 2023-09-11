import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { PaymentType } from '../model/payment-type';
import { EnumYesNo } from '../core/enuns/enumSimNao';

@Injectable({
  providedIn: 'root',
})
export class PaymentTypeService extends BaseHttpService<PaymentType> {
  override newInstance(): PaymentType {
    return { name: '', id: 0, active: EnumYesNo.YES, update: new Date() };
  }
  override rote: string = 'paymentType';
}
