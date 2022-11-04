import { Ovos } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { OvosService } from './../ovos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-ovos-pesquisa',
  templateUrl: './ovos-pesquisa.component.html',
  styleUrls: ['./ovos-pesquisa.component.css']
})
export class OvosPesquisaComponent implements OnInit {

  @ViewChild('tabelaOvos') grid: any;

  ovos: any[] = [];

  constructor(
    private ovosService: OvosService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de ovos');
    this.pesquisar();
  }

  pesquisar() {
    this.ovosService.listarTodos()
      .then((dados: any) => {
        this.ovos = dados;
      })
  }

}
