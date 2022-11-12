import { Ovos } from './../../../core/model';
import { SharedService } from './../../../shared/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { OvosService } from './../ovos.service';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-ovos-pesquisa',
  templateUrl: './ovos-pesquisa.component.html',
  styleUrls: ['./ovos-pesquisa.component.css']
})
export class OvosPesquisaComponent implements OnInit {

  @ViewChild('tabelaOvos') grid: any;

  ovos: any[] = [];
  ovosFind: any;

  showQtdDialog = false;
  showInfoDialog = false;

  quantidade!: number;
  codigoOvos!: number;

  constructor(
    private sharedService: SharedService,
    private ovosService: OvosService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title,
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

  confirmarExclusao(ovos: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(ovos);
      }
    });
  }

  excluir(ovos: any) {
    this.ovosService.excluir(ovos.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Setor excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  openNew(codigo: number) {
    this.codigoOvos = -1;

    if (codigo) {
      this.codigoOvos = codigo;
    }
    this.quantidade = 1;
    this.showQtdDialog = true;
  }

  openInfo(codigo: number) {
    this.ovosFind = new Ovos();
    this.showInfoDialog = true;

    this.carregarOvos(codigo);
  }

  hideDialogInfo() {
    this.showInfoDialog = false;
  }

  hideDialogQtd() {
    this.showQtdDialog = false;
  }

  carregarOvos(codigo: number) {
    this.ovosService.buscarPorCodigo(codigo)
      .then(ovos => {
        this.ovosFind = ovos;
      })
  }

  atualizarOvos() {
    if (this.codigoOvos != -1) {
      this.ovosService.atualizarQuantidade(this.codigoOvos, this.quantidade)
        .then(() => {
          this.messageService.add({ severity: 'success', detail: 'Ovos alterado com sucesso!' })
          // this.sharedService.reload("/ovos");
          this.hideDialogQtd();
          this.pesquisar();
        }).catch(erro => this.errorHandler.handle(erro));
    }
  }
}
