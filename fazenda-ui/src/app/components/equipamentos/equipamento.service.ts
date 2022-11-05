import { Equipamento } from './../../core/model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  equipamentoUrl: string;

  constructor(private http: HttpClient) {
    this.equipamentoUrl = `${environment.apiUrl}/equipamentos`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.equipamentoUrl)
      .toPromise();
  }

  adicionar(equipamento: Equipamento): Promise<any> {
    return this.http.post<any>(this.equipamentoUrl, equipamento).toPromise();
  }

  atualizar(equipamento: Equipamento): Promise<any> {
    return this.http.put<any>(`${this.equipamentoUrl}/${equipamento.codigo}`, equipamento).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.equipamentoUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.equipamentoUrl}/${codigo}`)
      .toPromise();
  }
}
