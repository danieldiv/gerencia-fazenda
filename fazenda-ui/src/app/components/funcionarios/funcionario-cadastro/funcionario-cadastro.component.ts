import { SetorService } from './../../setores/setor.service';
import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Funcionario } from './../../../core/model';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit {

  formulario!: FormGroup;

  setores: any[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
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

    const codigoFuncionario = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo funcionario');

    if (codigoFuncionario && codigoFuncionario !== 'novo') {
      this.carregarFuncionario(codigoFuncionario);
    }
    this.carregarSetores();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      cpf: [null, Validators.required],
      dataCadastro: [{ value: new Date, disabled: true }],
      dataNascimento: [null, Validators.required],
      setor: this.formBuilder.group({
        codigo: [null, Validators.required],
        descricao: []
      })
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarFuncionario(codigo: number) {
    this.funcionarioService.buscarPorCodigo(codigo)
      .then(funcionario => {
        console.log(funcionario);
        this.formulario?.patchValue(funcionario);
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  carregarSetores() {
    this.setorService.listarTodos()
      .then(setores => {
        this.setores = setores
          .map((s: any) => ({ label: s.descricao, value: s.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    if (this.editando) {
      this.atualizarFuncionario();
    } else {
      this.adicionarFuncionario();
    }
  }

  adicionarFuncionario() {
    this.funcionarioService.adicionar(this.formulario.value)
      .then(funcionarioAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Funcionario adicionado com sucesso!' })

        this.router.navigate(['/funcionarios'])
        // this.router.navigate(['/funcionarios', funcionarioAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarFuncionario() {
    this.funcionarioService.atualizar(this.formulario.value)
      .then((funcionario: Funcionario) => {
        this.formulario.patchValue(funcionario);
        this.messageService.add({ severity: 'success', detail: 'Funcionario alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Funcionario());
    this.router.navigate(['funcionarios/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de funcionario: ${this.formulario!.get('nome')?.value}`)
  }

}
