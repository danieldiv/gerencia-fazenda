import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl: string;

  constructor(private http: HttpClient) {
    this.lancamentoUrl = `${environment.apiUrl}/lancamentos`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.lancamentoUrl)
      .toPromise();
  }
}
