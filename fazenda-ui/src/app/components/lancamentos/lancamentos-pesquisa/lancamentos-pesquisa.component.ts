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

  lancamentos: any[] = [];
  lancamento: Lancamento;
  @ViewChild('tabelaLancamentos') grid: any;

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) {
    this.lancamento = new Lancamento();
  }

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

  showDialog: boolean = false;

  hideDialog() {
    this.showDialog = false;
  }

  openNew() {
    this.lancamento = {};
    this.showDialog = true;
  }



}
