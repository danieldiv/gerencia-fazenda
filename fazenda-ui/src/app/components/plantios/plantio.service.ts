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
    return this.http.put<any>(`${this.plantioUrl}/${plantio.codigo}`, plantio)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaData([response]);
        return response;
      })

  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.plantioUrl}/${codigo}`)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get(`${this.plantioUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaData([response]);
        return response;
      })
  }

  private converterStringsParaData(plantios: Plantio[]) {
    for (const plantio of plantios) {
      let offset = new Date().getTimezoneOffset() * 60000;

      if (plantio.dataPlantio) {
        plantio.dataPlantio = new Date(new Date(plantio.dataPlantio!).getTime() + offset);
      }
      if (plantio.dataColheita) {
        plantio.dataColheita = new Date(new Date(plantio.dataColheita!).getTime() + offset);
      }
    }
  }
}
