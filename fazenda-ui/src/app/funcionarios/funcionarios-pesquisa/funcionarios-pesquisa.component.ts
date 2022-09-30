import { FuncionarioService } from './../funcionario.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-funcionarios-pesquisa',
  templateUrl: './funcionarios-pesquisa.component.html',
  styleUrls: ['./funcionarios-pesquisa.component.css']
})
export class FuncionariosPesquisaComponent implements OnInit {

  funcionarios: any[] = [];
  @ViewChild('tabelaFuncionarios') grid: any;

  constructor(
    private funcionarioService: FuncionarioService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de funcionarios');
    this.pesquisar();
  }

  pesquisar() {
    this.funcionarioService.listarTodos()
      .then((dados: any) => {
        this.funcionarios = dados;
        console.log(this.funcionarios)
      })
  }

}
