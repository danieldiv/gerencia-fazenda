import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PastoService {

  pastoUrl: string;

  constructor(private http: HttpClient) {
    this.pastoUrl = `${environment.apiUrl}/pastos`
  }

  listarTodos(): Promise<any> {
    console.log(this.pastoUrl);
    return this.http.get(this.pastoUrl)
      .toPromise();
  }
}
