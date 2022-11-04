import { Plantio } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { PlantioService } from './../plantio.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-plantios-pesquisa',
  templateUrl: './plantios-pesquisa.component.html',
  styleUrls: ['./plantios-pesquisa.component.css']
})
export class PlantiosPesquisaComponent implements OnInit {

  @ViewChild('tabelaPlantios') grid: any;

  plantios: any[] = [];

  constructor(
    private plantioService: PlantioService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de plantios');
    this.pesquisar();
  }

  pesquisar() {
    this.plantioService.listarTodos()
      .then((dados: any) => {
        this.plantios = dados;
      })
  }

}
