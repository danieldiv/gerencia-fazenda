import { EquipamentoService } from './../equipamento.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
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
  @ViewChild('tabelaEquipamentos') grid: any;

  constructor(
    private equipamentoService: EquipamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de equipamentos');
    this.pesquisar();
  }

  pesquisar() {
    this.equipamentoService.listarTodos()
      .then((dados: any) => {
        this.equipamentos = dados;
        console.log(this.equipamentos)
      })
  }

}
