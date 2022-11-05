import { Animal } from './../../core/model';
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

  adicionar(animal: Animal): Promise<any> {
    return this.http.post<any>(this.animalUrl, animal).toPromise();
  }

  atualizar(animal: Animal): Promise<any> {
    return this.http.put<any>(`${this.animalUrl}/${animal.codigo}`, animal).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.animalUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.animalUrl}/${codigo}`)
      .toPromise();
  }
}
