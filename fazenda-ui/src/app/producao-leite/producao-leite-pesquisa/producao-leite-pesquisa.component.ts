import { ProducaoLeiteService } from './../producao-leite.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-producao-leite-pesquisa',
  templateUrl: './producao-leite-pesquisa.component.html',
  styleUrls: ['./producao-leite-pesquisa.component.css']
})
export class ProducaoLeitePesquisaComponent implements OnInit {

  producaoLeite: any[] = [];
  @ViewChild('tabelaProducaoLeite') grid: any;

  constructor(
    private producaoLeiteService: ProducaoLeiteService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de producaoLeite');
    this.pesquisar();
  }

  pesquisar() {
    this.producaoLeiteService.listarTodos()
      .then((dados: any) => {
        this.producaoLeite = dados;
        console.log(this.producaoLeite)
      })
  }

}
