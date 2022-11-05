import { Granja } from './../../core/model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GranjaService {

  granjaUrl: string;

  constructor(private http: HttpClient) {
    this.granjaUrl = `${environment.apiUrl}/granjas`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.granjaUrl)
      .toPromise();
  }

  adicionar(granja: Granja): Promise<any> {
    return this.http.post<any>(this.granjaUrl, granja).toPromise();
  }

  atualizar(granja: Granja): Promise<any> {
    return this.http.put<any>(`${this.granjaUrl}/${granja.codigo}`, granja).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.granjaUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.granjaUrl}/${codigo}`)
      .toPromise();
  }
}
