import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { Card } from '../model/card';
import { EnumYesNo } from '../core/enuns/enumSimNao';

@Injectable({
  providedIn: 'root',
})
export class CardService extends BaseHttpService<Card> {
  override newInstance(): Card {
    return { name: '', id: 0, active: EnumYesNo.YES, update: new Date() };
  }
  override rote: string = 'card';
}
