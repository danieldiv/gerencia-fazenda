import { Campo } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { CampoService } from './../campo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-campos-pesquisa',
  templateUrl: './campos-pesquisa.component.html',
  styleUrls: ['./campos-pesquisa.component.css']
})
export class CamposPesquisaComponent implements OnInit {

  @ViewChild('tabelaCampos') grid: any;

  campos: any[] = [];

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

  confirmarExclusao(setor: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(setor);
      }
    });
  }

  excluir(setor: any) {
    this.campoService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Campo excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
