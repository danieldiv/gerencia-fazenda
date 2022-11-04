import { Funcionario } from './../../core/model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionarioUrl: string;

  constructor(private http: HttpClient) {
    this.funcionarioUrl = `${environment.apiUrl}/funcionarios`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.funcionarioUrl)
      .toPromise();
  }

  adicionar(funcionario: Funcionario): Promise<any> {
    return this.http.post<any>(this.funcionarioUrl, funcionario).toPromise();
  }

  atualizar(funcionario: Funcionario): Promise<any> {
    return this.http.put<any>(`${this.funcionarioUrl}/${funcionario.codigo}`, funcionario).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.funcionarioUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.funcionarioUrl}/${codigo}`)
      .toPromise();
  }
}
