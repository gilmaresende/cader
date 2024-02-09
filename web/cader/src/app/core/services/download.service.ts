import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DownloadDTO } from '../model/DownloadDTO';
import { API_CONFIG } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(url: string, data: any): Observable<DownloadDTO> {
    const urlSuper = `${API_CONFIG.BASE_URL}/${url}`;
    console.log(urlSuper);
    return this.http.post<DownloadDTO>(urlSuper, data); // Substitua 'sua-url' pela URL do seu backend
  }
}
