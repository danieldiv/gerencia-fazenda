import { CulturaService } from './../cultura.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Cultura } from './../../../core/model';

@Component({
  selector: 'app-cultura-cadastro',
  templateUrl: './cultura-cadastro.component.html',
  styleUrls: ['./cultura-cadastro.component.css']
})
export class CulturaCadastroComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
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

    const codigoCultura = this.route.snapshot.params['codigo'];

    this.title.setTitle('Nova cultura');

    if (codigoCultura && codigoCultura !== 'novo') {
      this.carregarCultura(codigoCultura);
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

  carregarCultura(codigo: number) {
    this.culturaService.buscarPorCodigo(codigo)
      .then(cultura => {
        console.log(cultura);
        this.formulario?.patchValue(cultura);
        this.atualizarTituloEdicao();
      })
  }

  salvar() {
    if (this.editando) {
      this.atualizarCultura();
    } else {
      this.adicionarCultura();
    }
  }

  adicionarCultura() {
    this.culturaService.adicionar(this.formulario.value)
      .then(culturaAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Cultura adicionada com sucesso!' })

        this.router.navigate(['/culturas', culturaAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCultura() {
    this.culturaService.atualizar(this.formulario.value)
      .then((cultura: Cultura) => {
        this.formulario.patchValue(cultura);
        this.messageService.add({ severity: 'success', detail: 'Cultura alterada com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Cultura());
    this.router.navigate(['culturas/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de cultura: ${this.formulario!.get('descricao')?.value}`)
  }

}
