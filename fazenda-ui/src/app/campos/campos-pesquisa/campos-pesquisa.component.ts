import { CampoService } from './../campo.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-campos-pesquisa',
  templateUrl: './campos-pesquisa.component.html',
  styleUrls: ['./campos-pesquisa.component.css']
})
export class CamposPesquisaComponent implements OnInit {

  campos: any[] = [];
  @ViewChild('tabelaCampos') grid: any;

  constructor(
    private campoService: CampoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de campos');
    this.pesquisar();
  }

  pesquisar() {
    this.campoService.listarTodos()
      .then((dados: any) => {
        this.campos = dados;
      })
  }

}
