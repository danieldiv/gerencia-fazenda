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

  animais: any[] = [];
  @ViewChild('tabelaAnimais') grid: any;

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

}
