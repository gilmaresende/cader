import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SEntidade } from '../model/sentidade';
import { API_CONFIG } from 'src/environments/environments';
@Injectable({
  providedIn: 'root',
})
export class BaseHttpService<Entiti extends SEntidade> {
  rote: String = '';

  constructor(private http: HttpClient) {}

  delete(id: any): Observable<Entiti> {
    return this.http.delete<Entiti>(
      `${API_CONFIG.BASE_URL}/${this.rote}/${id}`
    );
  }

  findById(id: any): Observable<Entiti> {
    return this.http.get<Entiti>(`${API_CONFIG.BASE_URL}/${this.rote}/${id}`);
  }

  findAll(): Observable<Entiti[]> {
    return this.http.get<Entiti[]>(`${API_CONFIG.BASE_URL}/${this.rote}`);
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
}
