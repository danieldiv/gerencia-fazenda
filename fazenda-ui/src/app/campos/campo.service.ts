import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampoService {

  campoUrl: string;

  constructor(private http: HttpClient) {
    this.campoUrl = `${environment.apiUrl}/campos`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.campoUrl)
      .toPromise();
  }
}
