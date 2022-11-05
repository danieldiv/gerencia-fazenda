import { CulturaService } from './../../culturas/cultura.service';
import { CampoService } from './../../campos/campo.service';
import { PlantioService } from './../plantio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Plantio, Granja } from './../../../core/model';

@Component({
  selector: 'app-plantio-cadastro',
  templateUrl: './plantio-cadastro.component.html',
  styleUrls: ['./plantio-cadastro.component.css']
})
export class PlantioCadastroComponent implements OnInit {

  formulario!: FormGroup;

  campos: any[] = [];
  culturas: any[] = [];

  unidades = [
    { label: 'Quilo', value: 'QUILO' },
    { label: 'Duzia', value: 'DUZIA' },
    { label: 'Litro', value: 'LITRO' }
  ];

  situacoes = [
    { label: 'Colhido', value: true },
    { label: 'Colher', value: false }
  ];

  constructor(
    private plantioService: PlantioService,
    private campoService: CampoService,
    private culturaService: CulturaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const codigoPlantio = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo plantio');

    if (codigoPlantio && codigoPlantio !== 'novo') {
      this.carregarPlantio(codigoPlantio);
    }
    this.carregarCampos();
    this.carregarCulturas();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      dataPlantio: [null, Validators.required],
      dataColheita: [],
      qtdColhido: [null, Validators.required],
      unidade: [{ value: 'QUILO', disabled: true }],
      situacao: [false, Validators.required],
      cultura: this.formBuilder.group({
        codigo: [null, Validators.required],
        descricao: []
      }),
      campo: this.formBuilder.group({
        codigo: [null, Validators.required],
      })
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarPlantio(codigo: number) {
    this.plantioService.buscarPorCodigo(codigo)
      .then(plantio => {
        console.log(plantio);
        this.formulario?.patchValue(plantio);
        this.atualizarTituloEdicao();
      })
  }

  carregarCulturas() {
    this.culturaService.listarTodos()
      .then(culturas => {
        this.culturas = culturas
          .map((c: any) => ({ label: c.descricao, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarCampos() {
    this.campoService.listarTodos()
      .then(campos => {
        console.log(campos);
        this.campos = campos
          .map((c: any) => ({ label: c.codigo, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    if (this.editando) {
      this.atualizarPlantio();
    } else {
      this.adicionarPlantio();
    }
  }

  adicionarPlantio() {
    this.plantioService.adicionar(this.formulario.value)
      .then(plantioAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Plantio adicionado com sucesso!' })

        this.router.navigate(['/plantios'])
        // this.router.navigate(['/plantios', plantioAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarPlantio() {
    this.plantioService.atualizar(this.formulario.value)
      .then((plantio: Plantio) => {
        this.formulario.patchValue(plantio);
        this.messageService.add({ severity: 'success', detail: 'Plantio alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Plantio());
    this.router.navigate(['plantios/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de plantio: ${this.formulario!.get('codigo')?.value}`)
  }

}
