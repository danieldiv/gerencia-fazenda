import { NotAuthenticadedError } from './../seguranca/fazenda-http-interceptor';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof NotAuthenticadedError) {
      console.log('erro refresh');

      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login'])
    } else if (errorResponse.status >= 400 && errorResponse.status <= 409) {
      msg = 'Ocorreu um erro ao processar a sua solicitação';

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
      }

      try {
        msg = errorResponse.error[0].mensagemUsuario;
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);
    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }
    console.log('passou aki')
    this.messageService.add({ severity: 'error', detail: msg });
  }
}
