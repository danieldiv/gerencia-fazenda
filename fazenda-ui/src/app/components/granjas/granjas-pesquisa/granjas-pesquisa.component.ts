import { Granja } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { GranjaService } from './../granja.service';
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
  granja?: Granja;
  @ViewChild('tabelaGranjas') grid: any;

  constructor(
    private granjaService: GranjaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) {
    // this.granja = new Granja();
  }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de granjas');
    this.pesquisar();
  }

  pesquisar() {
    this.granjaService.listarTodos()
      .then((dados: any) => {
        this.granjas = dados;
      })
  }

  showDialog: boolean = false;

  hideDialog() {
    this.showDialog = false;
  }

  openNew() {
    // this.granja = {};
    this.granja = new Granja();
    this.showDialog = true;
  }



}
