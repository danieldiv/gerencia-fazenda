import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantioService {

  plantio: string;

  constructor(private http: HttpClient) {
    this.plantio = `${environment.apiUrl}/plantio`
  }

  listarTodos(): Promise<any> {
    console.log(this.plantio);
    return this.http.get(this.plantio)
      .toPromise();
  }
}
