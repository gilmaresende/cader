import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/environments/environments';
import { BaseHttpService } from '../core/services/base-http.service';
import { BI } from '../model-bi/bi';

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

  getTypeOptionDate() {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/typeOptionDate`;
    return this.getHttp().get(url);
  }

  getBI(): BI {
    const bi: BI = {
      update: new Date(),
      bIParameters: [
        {
          key: 'pAno',
          name: 'Filtrar Cartão',
          typeInput: 1,
          typePrimitive: { id: 'LOCAL_DATE', description: 'LOCAL_DATE' },
          valueDefault: '',
          customizade: true,
          optionsDefined: [
            { name: 'Sim', value: '1' },
            { name: 'Nâo', value: '0' },
          ],
        },
        {
          key: 'pCartao',
          name: 'Cartão',
          typeInput: 2,
          typePrimitive: { id: 'String', description: 'String' },
          valueDefault: '',
          customizade: false,
          optionsDefined: [],
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

    this.setOb(bi);
    return bi;
  }
}
