import { AnimalService } from './../../animais/animal.service';
import { GranjaService } from './../granja.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Granja } from './../../../core/model';

@Component({
  selector: 'app-granja-cadastro',
  templateUrl: './granja-cadastro.component.html',
  styleUrls: ['./granja-cadastro.component.css']
})
export class GranjaCadastroComponent implements OnInit {

  formulario!: FormGroup;

  animais: any[] = [];

  constructor(
    private granjaService: GranjaService,
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

    const codigoGranja = this.route.snapshot.params['codigo'];

    this.title.setTitle('Nova granja');

    if (codigoGranja && codigoGranja !== 'novo') {
      this.carregarGranja(codigoGranja);
    }
    this.carregarAnimais();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      capacidade: [null, Validators.required],
      qtdAnimais: [null, Validators.required],
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
    this.granjaService.buscarPorCodigo(codigo)
      .then(granja => {
        console.log(granja);
        this.formulario?.patchValue(granja);
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
    this.granjaService.adicionar(this.formulario.value)
      .then(granjaAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Granja adicionado com sucesso!' })

        this.router.navigate(['/granjas', granjaAdicionada.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarGranja() {
    this.granjaService.atualizar(this.formulario.value)
      .then((granja: Granja) => {
        this.formulario.patchValue(granja);
        this.messageService.add({ severity: 'success', detail: 'Granja alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Granja());
    this.router.navigate(['granjas/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de granja: ${this.formulario!.get('descricao')?.value}`)
  }

}
