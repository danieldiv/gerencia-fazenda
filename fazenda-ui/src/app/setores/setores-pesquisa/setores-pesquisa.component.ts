import { Setor } from './../../core/model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { SetorService } from './../setor.service';

@Component({
  selector: 'app-setores-pesquisa',
  templateUrl: './setores-pesquisa.component.html',
  styleUrls: ['./setores-pesquisa.component.css']
})
export class SetoresPesquisaComponent implements OnInit {

  @ViewChild('tabelaSetores') grid: any;

  setores: any[] = [];
  setor: Setor;

  setorDialog: boolean = false;

  get editando() {
    return Boolean(this.setor.codigo != null);
  }

  constructor(
    private setorService: SetorService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) {
    this.setor = new Setor();
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

  editarSetor(setor: Setor) {
    this.setor = { ...setor };
    this.setorDialog = true;
  }

  hideDialog() {
    this.setorDialog = false;
  }

  openNew() {
    this.setor = {};
    this.setorDialog = true;
  }

  save() {
    if (this.editando) {
      this.updateSetor();
    } else {
      this.saveSetor();
    }
  }

  updateSetor() {
    this.setorDialog = false;

    this.setorService.atualizar(this.setor)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Setor atualizado com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  saveSetor() {
    this.setorDialog = false;

    this.setorService.adicionar(this.setor)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Setor adicionado com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
