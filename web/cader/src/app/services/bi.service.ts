import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/environments/environments';
import { BaseHttpService } from '../core/services/base-http.service';
import { BI } from '../model-bi/bi';
import { BIQuery } from '../model-bi/biquery';
import { newId } from '../core/utils/Factories/generator';

@Injectable({
  providedIn: 'root',
})
export class BiService extends BaseHttpService<BI> {
  override newInstance(): BI {
    const bi: BI = {
      update: new Date(),
      bIParameters: [],
      name: '',
      query: this.newQuery(),
    };
    bi.query.main = true;
    return bi;
  }
  override getFilterBase(): {} {
    return {};
  }
  override rote: string = 'bi';

  getTypesRegisters() {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/typesRegisters`;
    return this.getHttp().get(url);
  }

  getTypesEnum() {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/typesEnum`;
    return this.getHttp().get(url);
  }

  getTypeOptionDate() {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/typeOptionDate`;
    return this.getHttp().get(url);
  }

  newQuery(): BIQuery {
    return {
      key: newId().toString(),
      data: '',
      label: 'new',
      children: [],
      main: false,
    };
  }
}
