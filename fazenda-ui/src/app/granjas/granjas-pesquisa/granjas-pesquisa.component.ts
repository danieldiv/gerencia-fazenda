import { GranjaService } from './../granja.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-granjas-pesquisa',
  templateUrl: './granjas-pesquisa.component.html',
  styleUrls: ['./granjas-pesquisa.component.css']
})
export class GranjasPesquisaComponent implements OnInit {

  granjas: any[] = [];
  @ViewChild('tabelaGranjas') grid: any;

  constructor(
    private granjaService: GranjaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de granjas');
    this.pesquisar();
  }

  pesquisar() {
    this.granjaService.listarTodos()
      .then((dados: any) => {
        this.granjas = dados;
        console.log(this.granjas)
      })
  }

}
