import { Cultura, Lancamento } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { LancamentoService } from './../lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  @ViewChild('tabelaLancamentos') grid: any;

  lancamentos: any[] = [];

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de lancamentos');
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.listarTodos()
      .then((dados: any) => {
        this.lancamentos = dados;
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
    this.lancamentoService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Setor excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
