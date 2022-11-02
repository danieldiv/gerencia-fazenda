import { Setor } from './../../core/model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  setorUrl: string;

  constructor(private http: HttpClient) {
    this.setorUrl = `${environment.apiUrl}/setores`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.setorUrl)
      .toPromise();
  }

  adicionar(setor: Setor): Promise<any> {
    return this.http.post<any>(this.setorUrl, setor).toPromise();
  }

  atualizar(setor: Setor): Promise<any> {
    return this.http.put<any>(`${this.setorUrl}/${setor.codigo}`, setor).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.setorUrl}/${codigo}`)
      .toPromise();
  }
}
