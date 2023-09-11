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
  rote: String = '';

  constructor(private http: HttpClient) {}

  delete(id: any): Observable<Entiti> {
    return this.http.delete<Entiti>(
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

  update(tipo: Entiti): Observable<Entiti> {
    return this.http.put<Entiti>(
      `${API_CONFIG.BASE_URL}/${this.rote}/${tipo.id}`,
      tipo
    );
  }

  abstract newInstance(): Entiti;
}
