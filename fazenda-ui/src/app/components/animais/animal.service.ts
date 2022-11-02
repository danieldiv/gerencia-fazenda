import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animalUrl: string;

  constructor(private http: HttpClient) {
    this.animalUrl = `${environment.apiUrl}/animais`
  }

  listarTodos(): Promise<any> {
    return this.http.get(this.animalUrl)
      .toPromise();
  }
}
