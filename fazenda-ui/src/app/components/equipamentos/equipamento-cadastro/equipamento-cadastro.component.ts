import { EquipamentoService } from './../equipamento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Equipamento } from './../../../core/model';

@Component({
  selector: 'app-equipamento-cadastro',
  templateUrl: './equipamento-cadastro.component.html',
  styleUrls: ['./equipamento-cadastro.component.css']
})
export class EquipamentoCadastroComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private equipamentoService: EquipamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const codigoEquipamento = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo equipamento');

    if (codigoEquipamento && codigoEquipamento !== 'novo') {
      this.carregarEquipamento(codigoEquipamento);
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      nome: [null, Validators.required],
      data: [null, Validators.required]
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarEquipamento(codigo: number) {
    this.equipamentoService.buscarPorCodigo(codigo)
      .then(equipamento => {
        this.formulario?.patchValue(equipamento);
        this.atualizarTituloEdicao();
      })
  }

  salvar() {
    if (this.editando) {
      this.atualizarEquipamento();
    } else {
      this.adicionarEquipamento();
    }
  }

  adicionarEquipamento() {
    this.equipamentoService.adicionar(this.formulario.value)
      .then(equipamentoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Equipamento adicionado com sucesso!' })

        this.router.navigate(['equipamentos']);
        // this.router.navigate(['/equipamentos', equipamentoAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarEquipamento() {
    this.equipamentoService.atualizar(this.formulario.value)
      .then((equipamento: Equipamento) => {
        this.formulario.patchValue(equipamento);
        this.messageService.add({ severity: 'success', detail: 'Equipamento alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Equipamento());
    this.router.navigate(['equipamentos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de equipamento: ${this.formulario!.get('nome')?.value}`)
  }

}
