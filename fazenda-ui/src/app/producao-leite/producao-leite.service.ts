import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProducaoLeiteService {

  producaoLeiteUrl: string;

  constructor(private http: HttpClient) {
    this.producaoLeiteUrl = `${environment.apiUrl}/producao-leite`
  }

  listarTodos(): Promise<any> {
    console.log(this.producaoLeiteUrl);
    return this.http.get(this.producaoLeiteUrl)
      .toPromise();
  }
}
