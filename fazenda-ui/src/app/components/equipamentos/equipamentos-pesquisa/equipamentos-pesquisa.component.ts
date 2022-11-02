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

  equipamentos: any[] = [];
  equipamento: Equipamento;
  @ViewChild('tabelaEquipamentos') grid: any;

  constructor(
    private equipamentoService: EquipamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) {
    this.equipamento = new Equipamento();
  }

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

  showDialog: boolean = false;

  hideDialog() {
    this.showDialog = false;
  }

  openNew() {
    this.equipamento = {};
    this.showDialog = true;
  }



}
