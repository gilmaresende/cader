import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_CONFIG } from 'src/environments/environments';
import { BI } from '../model-bi/bi';
import { BaseHttpService } from '../core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class BiService extends BaseHttpService<BI> {
  override newInstance(): BI {
    throw new Error('Method not implemented.');
  }
  override getFilterBase(): {} {
    throw new Error('Method not implemented.');
  }
  override rote: string = 'bi';

  // constructor(private http: HttpClient, private router: Router) {}

  getTypesRegisters() {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/typesRegisters`;
    return this.getHttp().get(url);
  }

  getTypesEnum() {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/typesEnum`;
    return this.getHttp().get(url);
  }

  getBI(): BI {
    return {
      update: new Date(),
      bIParameters: [
        {
          key: 'pAno',
          type: 'String',
          name: 'Filtrar Cartão',
          defined: [],
          typeInput: 2,
        },
        {
          key: 'pCartao',
          type: 'String',
          name: 'Cartão',
          defined: [],
          typeInput: 3,
        },
      ],
      name: 'BI Teste',
      query: {
        id: 'a1',
        name: 'Ano',
        query: 'select',
        queriesChildren: [
          {
            id: 'b1',
            name: 'Mes',
            query: 'select 2',
            queriesChildren: [],
          },
          {
            id: 'b2',
            name: 'Mes 2',
            query: 'select 2a',
            queriesChildren: [
              {
                id: 'c1',
                name: 'c1 2',
                query: 'select c1',
                queriesChildren: [],
              },
            ],
          },
        ],
      },
    };
  }
}
