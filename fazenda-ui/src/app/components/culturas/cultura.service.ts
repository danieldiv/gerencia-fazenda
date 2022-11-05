import { Cultura } from './../../core/model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CulturaService {

  culturaUrl: string;

  constructor(private http: HttpClient) {
    this.culturaUrl = `${environment.apiUrl}/culturas`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.culturaUrl)
      .toPromise();
  }

  adicionar(cultura: Cultura): Promise<any> {
    return this.http.post<any>(this.culturaUrl, cultura).toPromise();
  }

  atualizar(cultura: Cultura): Promise<any> {
    return this.http.put<any>(`${this.culturaUrl}/${cultura.codigo}`, cultura).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.culturaUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.culturaUrl}/${codigo}`)
      .toPromise();
  }
}
