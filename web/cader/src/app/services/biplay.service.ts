import { Injectable } from '@angular/core';
import { BaseHttpService } from '../core/services/base-http.service';
import { BI } from '../model-bi/bi';
import { Observable } from 'rxjs';
import { ResponseServe } from '../core/model/response-serve';
import { API_CONFIG } from 'src/environments/environments';

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
