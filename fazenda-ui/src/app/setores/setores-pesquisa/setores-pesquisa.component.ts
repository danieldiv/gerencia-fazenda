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

  setores: any[] = [];
  @ViewChild('tabelaSetores') grid: any;

  constructor(
    private setorService: SetorService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de setores');
    this.pesquisar();
  }

  pesquisar() {
    this.setorService.listarTodos()
      .then((dados: any) => {
        this.setores = dados;
        console.log(this.setores)
      })
  }

}
