import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG, KEY_LOCAL } from 'src/environments/environments';
import { Login } from '../model/login';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private rote: string = 'user';

  constructor(private http: HttpClient, private router: Router) {}
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

  public logout() {
    localStorage.removeItem(KEY_LOCAL.KEY_TOKEN);
    return this.router.navigate(['']);
  }

  public isAutenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    const jwtHelper = new JwtHelperService();
    if (jwtHelper.isTokenExpired(token)) {
      localStorage.removeItem(KEY_LOCAL.KEY_TOKEN);
      return false;
    }
    return true;
  }

  public login(token: string) {
    localStorage.setItem(KEY_LOCAL.KEY_TOKEN, token);
    this.router.navigate(['cader/home']);
  }

  public getToken() {
    return localStorage.getItem(KEY_LOCAL.KEY_TOKEN);
  }
}
