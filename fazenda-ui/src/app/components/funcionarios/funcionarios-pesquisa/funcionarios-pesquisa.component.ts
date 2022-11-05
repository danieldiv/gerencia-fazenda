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

  @ViewChild('tabelaFuncionarios') grid: any;

  funcionarios: any[] = [];

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
    this.funcionarioService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Setor excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
