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
  animal: Animal;

  showDialog: boolean = false;


  constructor(
    private animalService: AnimalService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) {
    this.animal = new Animal();
  }

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


  hideDialog() {
    this.showDialog = false;
  }

  openNew() {
    this.animal = {};
    this.showDialog = true;
  }



}
