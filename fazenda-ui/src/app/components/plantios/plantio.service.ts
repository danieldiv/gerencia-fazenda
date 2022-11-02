import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantioService {

  plantioUrl: string;

  constructor(private http: HttpClient) {
    this.plantioUrl = `${environment.apiUrl}/plantios`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.plantioUrl)
      .toPromise();
  }
}
