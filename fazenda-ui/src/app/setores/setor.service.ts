import { environment } from './../../environments/environment';
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
    console.log(this.setorUrl);
    return this.http.get(this.setorUrl)
      .toPromise();
    // .then((response: any) => response['content']);
  }
}
