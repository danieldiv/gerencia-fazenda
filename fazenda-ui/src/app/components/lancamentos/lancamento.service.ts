import { Lancamento } from './../../core/model';
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

  adicionar(lancamento: Lancamento): Promise<any> {
    return this.http.post<any>(this.lancamentoUrl, lancamento).toPromise();
  }

  atualizar(lancamento: Lancamento): Promise<any> {
    return this.http.put<any>(`${this.lancamentoUrl}/${lancamento.codigo}`, lancamento).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.lancamentoUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.lancamentoUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaData([response]);

        return response;
      })
  }

  private converterStringsParaData(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      let offset = new Date().getTimezoneOffset() * 60000;

      lancamento.data = new Date(new Date(lancamento.data!).getTime() + offset);
    }
  }
}
