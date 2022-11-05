import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Lancamento } from './../../../core/model';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  formulario!: FormGroup;

  categorias = [
    { label: 'Cliente', value: 'CLIENTE' },
    { label: 'Fornecedor', value: 'FORNECEDOR' },
    { label: 'Funcionario', value: 'FUNCIONARIO' },
    { label: 'Outro', value: 'OUTRO' }
  ];

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const codigoLancamento = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo lancamento');

    if (codigoLancamento && codigoLancamento !== 'novo') {
      this.carregarLancamento(codigoLancamento);
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      data: [{ value: new Date, disabled: true }],
      descricao: [null, Validators.required],
      valor: [null, Validators.required],
      tipoLancamento: ['RECEITA', Validators.required],
      categoriaLancamento: ['CLIENTE', Validators.required]
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarLancamento(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.formulario?.patchValue(lancamento);
        this.atualizarTituloEdicao();
      })
  }

  salvar() {
    if (this.editando) {
      this.atualizarLancamento();
    } else {
      this.adicionarLacamento();
    }
  }

  adicionarLacamento() {
    this.lancamentoService.adicionar(this.formulario.value)
      .then(lancamentoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Lancamento adicionado com sucesso!' })

        // this.router.navigate(['/lancamentos'])
        this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarLancamento() {
    this.lancamentoService.atualizar(this.formulario.value)
      .then((lancamento: Lancamento) => {
        this.formulario.patchValue(lancamento);
        this.messageService.add({ severity: 'success', detail: 'Lancamento alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Lancamento());
    this.router.navigate(['lancamentos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lancamento: ${this.formulario!.get('descricao')?.value}`)
  }

}
