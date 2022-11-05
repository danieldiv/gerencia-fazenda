import { Granja } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { GranjaService } from './../granja.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-granjas-pesquisa',
  templateUrl: './granjas-pesquisa.component.html',
  styleUrls: ['./granjas-pesquisa.component.css']
})
export class GranjasPesquisaComponent implements OnInit {

  @ViewChild('tabelaGranjas') grid: any;

  granjas: any[] = [];

  constructor(
    private granjaService: GranjaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de granjas');
    this.pesquisar();
  }

  pesquisar() {
    this.granjaService.listarTodos()
      .then((dados: any) => {
        this.granjas = dados;
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
    this.granjaService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Granja excluída com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
