import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Setor } from './../../../core/model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

import { SetorService } from './../setor.service';

@Component({
  selector: 'app-setores-pesquisa',
  templateUrl: './setores-pesquisa.component.html',
  styleUrls: ['./setores-pesquisa.component.css']
})
export class SetoresPesquisaComponent implements OnInit {

  @ViewChild('tabelaSetores') grid: any;

  setores: any[] = [];
  // setor: Setor;

  // setorDialog: boolean = false;

  // get editando() {
  //   return Boolean(this.setor.codigo != null);
  // }

  constructor(
    private setorService: SetorService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) {
    // this.setor = new Setor();
  }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de setores');
    this.pesquisar();
  }

  pesquisar() {
    this.setorService.listarTodos()
      .then((dados: any) => {
        this.setores = dados;
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
    this.setorService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Setor excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
