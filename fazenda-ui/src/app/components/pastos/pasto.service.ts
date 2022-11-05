import { Pasto } from './../../core/model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PastoService {

  pastoUrl: string;

  constructor(private http: HttpClient) {
    this.pastoUrl = `${environment.apiUrl}/pastos`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.pastoUrl)
      .toPromise();
  }

  adicionar(pasto: Pasto): Promise<any> {
    return this.http.post<any>(this.pastoUrl, pasto).toPromise();
  }

  atualizar(pasto: Pasto): Promise<any> {
    return this.http.put<any>(`${this.pastoUrl}/${pasto.codigo}`, pasto).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.pastoUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.pastoUrl}/${codigo}`)
      .toPromise();
  }
}
