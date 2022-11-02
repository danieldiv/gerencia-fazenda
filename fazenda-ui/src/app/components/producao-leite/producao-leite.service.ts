import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProducaoLeiteService {

  producaoLeiteUrl: string;

  constructor(private http: HttpClient) {
    this.producaoLeiteUrl = `${environment.apiUrl}/producaoleite`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.producaoLeiteUrl)
      .toPromise();
  }
}
