import { Animal } from './../../../core/model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { AnimalService } from './../animal.service';

@Component({
  selector: 'app-animal-cadastro',
  templateUrl: './animal-cadastro.component.html',
  styleUrls: ['./animal-cadastro.component.css']
})
export class AnimalCadastroComponent implements OnInit {

  formulario!: FormGroup;

  tipos = [
    { label: 'Gado', value: 'GADO' },
    { label: 'Galinha', value: 'GALINHA' }
  ];

  constructor(
    private animalService: AnimalService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const codigoAnimal = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo animal');

    if (codigoAnimal && codigoAnimal !== 'novo') {
      this.carregarAnimal(codigoAnimal);
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      descricao: [null, Validators.required],
      tipoAnimal: ['GADO', Validators.required]
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarAnimal(codigo: number) {
    this.animalService.buscarPorCodigo(codigo)
      .then(animal => {
        console.log(animal);
        this.formulario?.patchValue(animal);
        this.atualizarTituloEdicao();
      })
  }

  salvar() {
    if (this.editando) {
      this.atualizarAnimal();
    } else {
      this.adicionarAnimal();
    }
  }

  adicionarAnimal() {
    this.animalService.adicionar(this.formulario.value)
      .then(animalAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Animal adicionado com sucesso!' })

        this.router.navigate(['/animais', animalAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarAnimal() {
    this.animalService.atualizar(this.formulario.value)
      .then((animal: Animal) => {
        this.formulario.patchValue(animal);
        this.messageService.add({ severity: 'success', detail: 'Animal alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Animal());
    this.router.navigate(['animais/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de animal: ${this.formulario!.get('descricao')?.value}`)
  }

}
