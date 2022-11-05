import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Setor } from './../../../core/model';
import { SetorService } from './../setor.service';

@Component({
  selector: 'app-setor-cadastro',
  templateUrl: './setor-cadastro.component.html',
  styleUrls: ['./setor-cadastro.component.css']
})
export class SetorCadastroComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private setorService: SetorService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const codigoSetor = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo setor');

    if (codigoSetor && codigoSetor !== 'novo') {
      this.carregarSetor(codigoSetor);
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      descricao: [null, Validators.required]
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarSetor(codigo: number) {
    this.setorService.buscarPorCodigo(codigo)
      .then(setor => {
        console.log(setor);
        this.formulario?.patchValue(setor);
        this.atualizarTituloEdicao();
      })
  }

  salvar() {
    if (this.editando) {
      this.atualizarSetor();
    } else {
      this.adicionarSetor();
    }
  }

  adicionarSetor() {
    this.setorService.adicionar(this.formulario.value)
      .then(setorAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Setor adicionado com sucesso!' })

        this.router.navigate(['/setores', setorAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarSetor() {
    this.setorService.atualizar(this.formulario.value)
      .then((setor: Setor) => {
        this.formulario.patchValue(setor);
        this.messageService.add({ severity: 'success', detail: 'Setor alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Setor());
    this.router.navigate(['setores/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de setor: ${this.formulario!.get('descricao')?.value}`)
  }

}
