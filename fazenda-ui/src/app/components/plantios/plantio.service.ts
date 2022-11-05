import { Plantio } from './../../core/model';
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

  adicionar(plantio: Plantio): Promise<any> {
    return this.http.post<any>(this.plantioUrl, plantio).toPromise();
  }

  atualizar(plantio: Plantio): Promise<any> {
    return this.http.put<any>(`${this.plantioUrl}/${plantio.codigo}`, plantio).toPromise();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.plantioUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.plantioUrl}/${codigo}`)
      .toPromise();
  }
}
