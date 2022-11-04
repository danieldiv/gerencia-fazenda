import { Animal } from './../../../core/model';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AnimalService } from './../animal.service';

@Component({
  selector: 'app-animais-pesquisa',
  templateUrl: './animais-pesquisa.component.html',
  styleUrls: ['./animais-pesquisa.component.css']
})
export class AnimaisPesquisaComponent implements OnInit {

  @ViewChild('tabelaAnimais') grid: any;

  animais: any[] = [];

  constructor(
    private animalService: AnimalService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de animais');
    this.pesquisar();
  }

  pesquisar() {
    this.animalService.listarTodos()
      .then((dados: any) => {
        this.animais = dados;
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
    this.animalService.excluir(setor.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Animal excluído com sucesso!' })
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
