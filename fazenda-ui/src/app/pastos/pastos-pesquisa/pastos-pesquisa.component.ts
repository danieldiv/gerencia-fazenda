import { PastoService } from './../pasto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from './../../core/error-handler.service';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pastos-pesquisa',
  templateUrl: './pastos-pesquisa.component.html',
  styleUrls: ['./pastos-pesquisa.component.css']
})
export class PastosPesquisaComponent implements OnInit {

  pastos: any[] = [];
  @ViewChild('tabelaPastos') grid: any;

  constructor(
    private pastoService: PastoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de pastos');
    this.pesquisar();
  }

  pesquisar() {
    this.pastoService.listarTodos()
      .then((dados: any) => {
        this.pastos = dados;
      })
  }

}
