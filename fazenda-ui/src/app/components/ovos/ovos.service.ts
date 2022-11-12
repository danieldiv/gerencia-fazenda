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
    // .then((response: any) => {
    //   this.converterStringsParaData([response]);
    //   return response;
    // })
  }

  adicionar(ovos: Ovos): Promise<any> {
    return this.http.post<any>(this.ovosUrl, ovos).toPromise();
  }

  atualizarQuantidade(codigo: number, quantidade: number): Promise<any> {
    return this.http.put<any>(`${this.ovosUrl}/${codigo}/quantidade`, quantidade)
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.ovosUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.ovosUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaData([response]);
        return response;
      })
  }

  private converterStringsParaData(listOvos: Ovos[]) {
    for (const ovos of listOvos) {
      let offset = new Date().getTimezoneOffset() * 60000;

      ovos.data = new Date(new Date(ovos.data!).getTime() + offset);
      // console.log(ovos);
    }
  }
}
