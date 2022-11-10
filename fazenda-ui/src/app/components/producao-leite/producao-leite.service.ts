import { ProducaoLeite } from './../../core/model';
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

  adicionar(producaoLeite: ProducaoLeite): Promise<any> {
    return this.http.post<any>(this.producaoLeiteUrl, producaoLeite).toPromise();
  }

  atualizar(producaoLeite: ProducaoLeite): Promise<any> {
    return this.http.put<any>(`${this.producaoLeiteUrl}/${producaoLeite.codigo}`, producaoLeite)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaData([response]);
        return response;
      })
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.producaoLeiteUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.producaoLeiteUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaData([response]);
        return response;
      })
  }

  private converterStringsParaData(listProdLeite: ProducaoLeite[]) {
    for (const prodLeite of listProdLeite) {
      let offset = new Date().getTimezoneOffset() * 60000;

      prodLeite.data = new Date(new Date(prodLeite.data!).getTime() + offset);
    }
  }
}
