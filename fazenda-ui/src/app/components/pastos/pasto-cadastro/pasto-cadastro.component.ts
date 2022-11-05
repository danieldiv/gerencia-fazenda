import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Pasto } from './../../../core/model';
import { AnimalService } from './../../animais/animal.service';
import { PastoService } from './../pasto.service';

@Component({
  selector: 'app-pasto-cadastro',
  templateUrl: './pasto-cadastro.component.html',
  styleUrls: ['./pasto-cadastro.component.css']
})
export class PastoCadastroComponent implements OnInit {

  formulario!: FormGroup;

  animais: any[] = [];

  constructor(
    private pastoService: PastoService,
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

    const codigoPasto = this.route.snapshot.params['codigo'];

    this.title.setTitle('Nova pasto');

    if (codigoPasto && codigoPasto !== 'novo') {
      this.carregarGranja(codigoPasto);
    }
    this.carregarAnimais();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      capacidade: [null, Validators.required],
      qtdAnimal: [null, Validators.required],
      animal: this.formBuilder.group({
        codigo: [null, Validators.required],
        descricao: []
      })
    });
  }

  carregarAnimais() {
    this.animalService.listarTodos()
      .then(animais => {
        this.animais = animais
          .map((s: any) => ({ label: s.descricao, value: s.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarGranja(codigo: number) {
    this.pastoService.buscarPorCodigo(codigo)
      .then(pasto => {
        console.log(pasto);
        this.formulario?.patchValue(pasto);
        this.atualizarTituloEdicao();
      })
  }

  salvar() {
    if (this.editando) {
      this.atualizarGranja();
    } else {
      this.adicionarGranja();
    }
  }

  adicionarGranja() {
    this.pastoService.adicionar(this.formulario.value)
      .then(pastoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Pasto adicionado com sucesso!' })

        this.router.navigate(['/pastos', pastoAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarGranja() {
    this.pastoService.atualizar(this.formulario.value)
      .then((pasto: Pasto) => {
        this.formulario.patchValue(pasto);
        this.messageService.add({ severity: 'success', detail: 'Pasto alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Pasto());
    this.router.navigate(['pastos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de pasto: ${this.formulario!.get('descricao')?.value}`)
  }

}

