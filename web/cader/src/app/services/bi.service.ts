import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/environments/environments';
import { BaseHttpService } from '../core/services/base-http.service';
import { BI } from '../model-bi/bi';
import { BIQuery } from '../model-bi/biquery';
import { newId } from '../core/utils/Factories/generator';
import { BIParameter } from '../model-bi/biparameter';
import { Observable } from 'rxjs';
import { ResponseServe } from '../core/model/response-serve';

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

  getNewParameter(): BIParameter {
    return {
      name: 'new',
      key: '',
      typeInput: 1,
      valueDefault: '',
      customized: false,
      optionsDefined: [],
    };
  }

  override create(ob: BI): Observable<ResponseServe> {
    const jsonString = JSON.stringify(ob, (key, value) => {
      if (key === 'parent') {
        return undefined; // Evitar referências circulares
      }
      return value;
    });
    const str = { str: jsonString };
    const response = this.getHttp().post<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}`,
      str
    );
    return response;
  }

  override update(ob: BI): Observable<ResponseServe> {
    const jsonString = JSON.stringify(ob, (key, value) => {
      if (key === 'parent') {
        return undefined; // Evitar referências circulares
      }
      return value;
    });
    const str = { str: jsonString };
    const response = this.getHttp().put<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/${ob.id}`,
      str
    );
    return response;
  }
}