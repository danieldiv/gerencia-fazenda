import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OvosService {

  ovosUrl: string;

  constructor(private http: HttpClient) {
    this.ovosUrl = `${environment.apiUrl}/ovos`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.ovosUrl)
      .toPromise();
  }
}
