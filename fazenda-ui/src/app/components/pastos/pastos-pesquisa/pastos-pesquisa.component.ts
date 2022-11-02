import { Pasto } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { PastoService } from './../pasto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pastos-pesquisa',
  templateUrl: './pastos-pesquisa.component.html',
  styleUrls: ['./pastos-pesquisa.component.css']
})
export class PastosPesquisaComponent implements OnInit {

  @ViewChild('tabelaPastos') grid: any;

  pastos: any[] = [];
  pasto: Pasto;

  showDialog: boolean = false;

  constructor(
    private pastoService: PastoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) {
    this.pasto = new Pasto();
  }

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


  hideDialog() {
    this.showDialog = false;
  }

  openNew() {
    // this.pasto.animal = {};
    this.pasto = {};
    this.showDialog = true;
  }

  save() {
    // if (this.editando) {
    //   this.updateSetor();
    // } else {
    //   this.saveSetor();
    // }
  }

}
