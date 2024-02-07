import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { BI } from '../model-bi/bi';
import { Observable } from 'rxjs';
import { ResponseServe } from '../core/model/response-serve';
import { API_CONFIG } from 'src/environments/environments';
import { BiService } from './bi.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BIPlayService extends BaseHttpService<BI> {
  constructor(private serviveBI: BiService, private httpSerice: HttpClient) {
    super(httpSerice);
  }
  override newInstance(): BI {
    return this.serviveBI.newInstance();
  }
  override getFilterBase(): {} {
    return {};
  }
  override rote: string = 'biPlay';

  findComboReport(entity: string): Observable<ResponseServe> {
    return this.getHttp().get<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/comboEntity/${entity}`
    );
  }

  playReport(bi: {
    idBI: number;
    parameter: Array<any>;
  }): Observable<ResponseServe> {
    const response = this.getHttp().post<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/playBi`,
      bi
    );
    return response;
  }
}
