import { Ovos } from './../../core/model';
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

  adicionar(ovos: Ovos): Promise<any> {
    return this.http.post<any>(this.ovosUrl, ovos).toPromise();
  }

  atualizar(ovos: Ovos): Promise<any> {
    return this.http.put<any>(`${this.ovosUrl}/${ovos.codigo}`, ovos).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.ovosUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.ovosUrl}/${codigo}`)
      .toPromise();
  }
}
