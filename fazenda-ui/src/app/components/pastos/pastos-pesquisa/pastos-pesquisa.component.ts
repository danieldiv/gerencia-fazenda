import { Pasto } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { PastoService } from './../pasto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pastos-pesquisa',
  templateUrl: './pastos-pesquisa.component.html',
  styleUrls: ['./pastos-pesquisa.component.css']
})
export class PastosPesquisaComponent implements OnInit {

  @ViewChild('tabelaPastos') grid: any;

  pastos: any[] = [];

  constructor(
    private pastoService: PastoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de pastos');
    this.pesquisar();
  }

  pesquisar() {
    this.pastoService.listarTodos()
      .then((dados: any) => {
        this.pastos = dados;
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
    this.pastoService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Pasto excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
