import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/environments/environments';
import { BaseHttpService } from '../core/services/base-http.service';
import { newId } from '../core/utils/Factories/generator';
import { BI } from '../model-bi/bi';
import { BIParameter } from '../model-bi/biparameter';
import { BIQuery } from '../model-bi/biquery';

@Injectable({
  providedIn: 'root',
})
export class BiService extends BaseHttpService<BI> {
  override newInstance(): BI {
    const biData = {
      bIParameters: [],
      name: '',
      query: this.newQuery(),
    };
    biData.query.main = true;

    const bi: BI = {
      name: '',
      update: new Date(),
      data: JSON.stringify(biData),
    };

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
      valueDefault: '0',
      typePrimitive: { id: 'INTEGER', description: 'INTEGER' },
      customized: false,
      optionsDefined: [],
    };
  }

  // override create(ob: BI): Observable<ResponseServe> {
  //   const jsonString = JSON.stringify(ob, (key, value) => {
  //     if (key === 'parent') {
  //       return undefined; // Evitar referências circulares
  //     }
  //     return value;
  //   });
  //   const str = { str: jsonString };
  //   const response = this.getHttp().post<ResponseServe>(
  //     `${API_CONFIG.BASE_URL}/${this.rote}`,
  //     str
  //   );
  //   return response;
  // }

  // override update(ob: BI): Observable<ResponseServe> {
  //   const jsonString = JSON.stringify(ob, (key, value) => {
  //     if (key === 'parent') {
  //       return undefined; // Evitar referências circulares
  //     }
  //     return value;
  //   });
  //   const str = { str: jsonString };
  //   const response = this.getHttp().put<ResponseServe>(
  //     `${API_CONFIG.BASE_URL}/${this.rote}/${ob.id}`,
  //     str
  //   );
  //   return response;
  // }
}
