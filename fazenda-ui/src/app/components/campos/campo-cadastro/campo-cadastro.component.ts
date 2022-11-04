import { CampoService } from './../campo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../../core/error-handler.service';
import { Campo } from './../../../core/model';

@Component({
  selector: 'app-campo-cadastro',
  templateUrl: './campo-cadastro.component.html',
  styleUrls: ['./campo-cadastro.component.css']
})
export class CampoCadastroComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private campoService: CampoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();

    const codigoCampo = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo campo');

    if (codigoCampo && codigoCampo !== 'novo') {
      this.carregarCampo(codigoCampo);
    }
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      largura: [null, Validators.required],
      comprimento: [null, Validators.required]
    });
  }

  get editando() {
    return Boolean(this.formulario.get('codigo')?.value);
  }

  carregarCampo(codigo: number) {
    this.campoService.buscarPorCodigo(codigo)
      .then(campo => {
        this.formulario?.patchValue(campo);
        this.atualizarTituloEdicao();
      })
  }

  salvar() {
    if (this.editando) {
      this.atualizarCampo();
    } else {
      this.adicionarCampo();
    }
  }

  adicionarCampo() {
    this.campoService.adicionar(this.formulario.value)
      .then(campoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Campo adicionado com sucesso!' })

        this.router.navigate(['/campos', campoAdicionado.codigo])
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCampo() {
    this.campoService.atualizar(this.formulario.value)
      .then((campo: Campo) => {
        this.formulario.patchValue(campo);
        this.messageService.add({ severity: 'success', detail: 'Campo alterado com sucesso!' })
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Campo());
    this.router.navigate(['campos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de campo: [
      ${this.formulario!.get('codigo')?.value} -
      ${this.formulario!.get('largura')?.value} x
      ${this.formulario!.get('comprimento')?.value} ]`)
  }

}
