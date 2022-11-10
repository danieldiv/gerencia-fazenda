import { GranjaService } from './../../granjas/granja.service';
import { OvosService } from './../ovos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Ovos, Granja } from './../../../core/model';

@Component({
  selector: 'app-ovos-cadastro',
  templateUrl: './ovos-cadastro.component.html',
  styleUrls: ['./ovos-cadastro.component.css']
})
export class OvosCadastroComponent implements OnInit {

  formulario!: FormGroup;

  granjas: any[] = [];

  unidades = [
    { label: 'Quilo', value: 'QUILO' },
    { label: 'Duzia', value: 'DUZIA' },
    { label: 'Litro', value: 'LITRO' }
  ];

  constructor(
    private ovosService: OvosService,
    private granjaService: GranjaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const codigoOvos = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo ovos');

    if (codigoOvos && codigoOvos !== 'novo') {
      this.carregarOvos(codigoOvos);
    }
    this.carregarGranjas();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      data: [{ value: new Date, disabled: true }],
      quantidade: [null, Validators.required],
      unidade: [{ value: 'DUZIA', disabled: true }],
      granja: this.formBuilder.group({
        codigo: [null, Validators.required],
      })
    });
  }

  get quantidade() {
    return this.formulario.get('quantidade')?.value;
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarOvos(codigo: number) {
    this.ovosService.buscarPorCodigo(codigo)
      .then(ovos => {
        console.log(ovos);
        this.formulario?.patchValue(ovos);
        this.atualizarTituloEdicao();
      })
  }

  carregarGranjas() {
    this.granjaService.listarTodos()
      .then(granjas => {
        this.granjas = granjas
          .map((g: any) => ({ label: g.codigo, value: g.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    if (this.editando) {
      this.atualizarOvos();
    } else {
      this.adicionarOvos();
    }
  }

  adicionarOvos() {
    this.ovosService.adicionar(this.formulario.value)
      .then(ovosAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Ovos adicionado com sucesso!' })

        this.router.navigate(['/ovos'])
        // this.router.navigate(['/ovos', ovosAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarOvos() {
    this.ovosService.atualizar(this.formulario.value)
      .then((ovos: Ovos) => {
        this.formulario.patchValue(ovos);
        this.messageService.add({ severity: 'success', detail: 'Ovos alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Ovos());
    this.router.navigate(['ovos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de ovos: ${this.formulario!.get('codigo')?.value}`)
  }

}
