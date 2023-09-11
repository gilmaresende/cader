import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/environments/environments';
import { ResponseServe } from '../model/response-serve';
import { SEntidade } from '../model/sentidade';
@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpService<Entiti extends SEntidade> {
  rote: string = '';

  constructor(private http: HttpClient) {}

  delete(id: any): Observable<ResponseServe> {
    return this.http.delete<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/${id}`
    );
  }

  findById(id: any): Observable<ResponseServe> {
    return this.http.get<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/${id}`
    );
  }

  findAll(): Observable<ResponseServe> {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/list`;
    const response = this.http.post<ResponseServe>(url, {});
    return response;
  }

  findFilter(): Observable<Entiti[]> {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}`;
    return this.http.get<Entiti[]>(url);
  }

  create(ob: Entiti): Observable<ResponseServe> {
    const response = this.http.post<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}`,
      ob
    );
    return response;
  }

  update(ob: Entiti): Observable<ResponseServe> {
    const response = this.http.put<ResponseServe>(
      `${API_CONFIG.BASE_URL}/${this.rote}/${ob.id}`,
      ob
    );
    return response;
  }

  abstract newInstance(): Entiti;
}
