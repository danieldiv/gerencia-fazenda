import { environment } from './../../environments/environment';
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
    console.log(this.equipamentoUrl);
    return this.http.get(this.equipamentoUrl)
      .toPromise();
  }
}
