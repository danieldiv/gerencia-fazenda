import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { ProducaoLeite } from './../../../core/model';
import { PastoService } from './../../pastos/pasto.service';
import { ProducaoLeiteService } from './../producao-leite.service';

@Component({
  selector: 'app-producao-leite-cadastro',
  templateUrl: './producao-leite-cadastro.component.html',
  styleUrls: ['./producao-leite-cadastro.component.css']
})
export class ProducaoLeiteCadastroComponent implements OnInit {

  formulario!: FormGroup;

  pastos: any[] = [];

  unidades = [
    { label: 'Quilo', value: 'QUILO' },
    { label: 'Duzia', value: 'DUZIA' },
    { label: 'Litro', value: 'LITRO' }
  ];

  constructor(
    private producaoLeiteService: ProducaoLeiteService,
    private pastoService: PastoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const codigoProdLeite = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo prodLeite');

    if (codigoProdLeite && codigoProdLeite !== 'novo') {
      this.carregarProdLeite(codigoProdLeite);
    }
    this.carregarPastos();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      quantidade: [null, Validators.required],
      unidade: [{ value: 'LITRO', disabled: true }],
      pasto: this.formBuilder.group({
        codigo: [null, Validators.required],
      })
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarProdLeite(codigo: number) {
    this.producaoLeiteService.buscarPorCodigo(codigo)
      .then(prodLeite => {
        console.log(prodLeite);
        this.formulario?.patchValue(prodLeite);
        this.atualizarTituloEdicao();
      })
  }

  carregarPastos() {
    this.pastoService.listarTodos()
      .then(pastos => {
        this.pastos = pastos
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
    this.producaoLeiteService.adicionar(this.formulario.value)
      .then(ovosAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Producao de leite adicionado com sucesso!' })

        this.router.navigate(['/producao-leite'])
        // this.router.navigate(['/producao-leite', ovosAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarOvos() {
    this.producaoLeiteService.atualizar(this.formulario.value)
      .then((prodLeite: ProducaoLeite) => {
        this.formulario.patchValue(prodLeite);
        this.messageService.add({ severity: 'success', detail: 'Producao de leite alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new ProducaoLeite());
    this.router.navigate(['producao-leite/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de produção de leite: ${this.formulario!.get('codigo')?.value}`)
  }

}
