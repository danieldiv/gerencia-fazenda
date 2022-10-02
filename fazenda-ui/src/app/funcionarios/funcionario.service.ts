import { environment } from './../../environments/environment';
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
}
