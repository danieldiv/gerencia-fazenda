import { Cultura } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { CulturaService } from './../cultura.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-culturas-pesquisa',
  templateUrl: './culturas-pesquisa.component.html',
  styleUrls: ['./culturas-pesquisa.component.css']
})
export class CulturasPesquisaComponent implements OnInit {

  @ViewChild('tabelaCulturas') grid: any;

  culturas: any[] = [];

  constructor(
    private culturaService: CulturaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de culturas');
    this.pesquisar();
  }

  pesquisar() {
    this.culturaService.listarTodos()
      .then((dados: any) => {
        this.culturas = dados;
      })
  }
}
