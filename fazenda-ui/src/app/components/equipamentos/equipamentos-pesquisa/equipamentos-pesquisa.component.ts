import { Equipamento } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { EquipamentoService } from './../equipamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-equipamentos-pesquisa',
  templateUrl: './equipamentos-pesquisa.component.html',
  styleUrls: ['./equipamentos-pesquisa.component.css']
})
export class EquipamentosPesquisaComponent implements OnInit {

  @ViewChild('tabelaEquipamentos') grid: any;

  equipamentos: any[] = [];

  constructor(
    private equipamentoService: EquipamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de equipamentos');
    this.pesquisar();
  }

  pesquisar() {
    this.equipamentoService.listarTodos()
      .then((dados: any) => {
        this.equipamentos = dados;
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
    this.equipamentoService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Equipamento excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
