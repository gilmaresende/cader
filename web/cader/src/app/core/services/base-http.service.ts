import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SEntidade } from '../model/sentidade';
import { API_CONFIG } from 'src/environments/environments';
import { AuthServiceService } from './auth-service.service';
import { ResponseServe } from '../model/response-serve';
@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpService<Entiti extends SEntidade> {
  rote: String = '';

  constructor(
    private http: HttpClient,
    private authService: AuthServiceService
  ) {}

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
    //return this.http.post<Entiti[]>(url, {}, this.getHeader());
  }

  findFilter(): Observable<Entiti[]> {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}`;
    return this.http.get<Entiti[]>(url);
  }

  create(tipo: Entiti): Observable<Entiti> {
    return this.http.post<Entiti>(`${API_CONFIG.BASE_URL}/${this.rote}`, tipo);
  }

  update(tipo: Entiti): Observable<Entiti> {
    return this.http.put<Entiti>(
      `${API_CONFIG.BASE_URL}/${this.rote}/${tipo.id}`,
      tipo
    );
  }

  getHeader() {
    const _headers = new HttpHeaders();
    const headers = _headers.append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const token: string = this.authService.getToken() as string;
    headers.append('token', token);
    headers.append('Authorization', 'bearer ' + token);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     token: ,this.authService.getToken()
    //   }),
    // };
    return headers;
  }

  abstract newInstance(): Entiti;
}
