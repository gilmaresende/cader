import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/environments/environments';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private rote: string = 'user';

  constructor(private http: HttpClient) {}
  //HttpResponse<string>
  // Observable<string>
  /*
  authenticate(creds: Login): Observable<string> {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/login`;
    return this.http.post<any>(url, creds).pipe(
      (res) => {
        console.log(res);
        return res;
      },
      (error) => {
        return error;
      }
    );
  }*/

  authenticate(creds: Login) {
    const url = `${API_CONFIG.BASE_URL}/${this.rote}/login`;
    return this.http.post(url, creds, {
      observe: 'response',
      responseType: 'text',
    });
  }
}
