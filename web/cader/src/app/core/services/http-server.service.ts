import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  constructor(private http: HttpClient) {}

  post(rote: string, ob: any): Observable<any> {
    const url = `${API_CONFIG.BASE_URL}/${rote}`;
    const response = this.http.post(url, ob, {
      responseType: 'blob',
    });
    return response;
  }
}
