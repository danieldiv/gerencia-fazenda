import { ProducaoLeite } from './../../../core/model';
import { ProducaoLeiteService } from './../producao-leite.service';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-producao-leite-pesquisa',
  templateUrl: './producao-leite-pesquisa.component.html',
  styleUrls: ['./producao-leite-pesquisa.component.css']
})
export class ProducaoLeitePesquisaComponent implements OnInit {

  @ViewChild('tabelaProducaoLeite') grid: any;

  producaoLeite: any[] = [];

  constructor(
    private producaoLeiteService: ProducaoLeiteService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de producao de leite');
    this.pesquisar();
  }

  pesquisar() {
    this.producaoLeiteService.listarTodos()
      .then((dados: any) => {
        this.producaoLeite = dados;
      })
  }

  confirmarExclusao(setor: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(setor);
      }
    });
  }

  excluir(setor: any) {
    this.producaoLeiteService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Producao de leite excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
