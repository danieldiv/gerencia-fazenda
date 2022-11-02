import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GranjaService {

  granjaUrl: string;

  constructor(private http: HttpClient) {
    this.granjaUrl = `${environment.apiUrl}/granjas`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.granjaUrl)
      .toPromise();
  }
}
