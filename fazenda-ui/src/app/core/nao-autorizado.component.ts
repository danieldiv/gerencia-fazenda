
import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="container">
    <h1>Acesso negado!</h1>
  </div>
  `,
})
export class NaoAutorizadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
