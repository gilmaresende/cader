import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { BI } from '../model-bi/bi';

@Injectable({
  providedIn: 'root',
})
export class BIPlayService extends BaseHttpService<BI> {
  override newInstance(): BI {
    throw new Error('Method not implemented.');
  }
  override getFilterBase(): {} {
    throw {};
  }
  override rote: string = 'biPlay';
}
