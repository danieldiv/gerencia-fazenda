import { Funcionario } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { FuncionarioService } from './../funcionario.service';
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
  funcionario?: Funcionario;
  @ViewChild('tabelaFuncionarios') grid: any;

  constructor(
    private funcionarioService: FuncionarioService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) {
    // this.funcionario = new Funcionario();
  }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de funcionarios');
    this.pesquisar();
  }

  pesquisar() {
    this.funcionarioService.listarTodos()
      .then((dados: any) => {
        this.funcionarios = dados;
      })
  }

  showDialog: boolean = false;

  hideDialog() {
    this.showDialog = false;
  }

  openNew() {
    // this.funcionario = {};
    this.funcionario = new Funcionario();
    this.showDialog = true;
  }



}
