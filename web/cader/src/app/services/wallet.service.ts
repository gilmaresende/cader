import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { Wallet } from '../model/wallet';
import { EnumYesNo } from '../core/enuns/enumSimNao';

@Injectable({
  providedIn: 'root',
})
export class WalletService extends BaseHttpService<Wallet> {
  override newInstance(): Wallet {
    return {
      name: '',
      id: 0,
      active: EnumYesNo.YES,
      update: new Date(),
      reserved: EnumYesNo.NO,
      canBeNegative: EnumYesNo.NO,
      balance: 0,
    };
  }
  override rote: string = 'wallet';
}
