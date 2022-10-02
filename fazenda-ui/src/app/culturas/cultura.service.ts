import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CulturaService {

  culturaUrl: string;

  constructor(private http: HttpClient) {
    this.culturaUrl = `${environment.apiUrl}/culturas`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.culturaUrl)
      .toPromise();
  }
}
