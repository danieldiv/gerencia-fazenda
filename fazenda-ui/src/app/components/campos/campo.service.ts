import { Campo } from './../../core/model';
import { environment } from './../../../environments/environment';
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

  adicionar(setor: Campo): Promise<any> {
    return this.http.post<any>(this.campoUrl, setor).toPromise();
  }

  atualizar(setor: Campo): Promise<any> {
    return this.http.put<any>(`${this.campoUrl}/${setor.codigo}`, setor).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.campoUrl}/${codigo}`)
      .toPromise();
  }
}
