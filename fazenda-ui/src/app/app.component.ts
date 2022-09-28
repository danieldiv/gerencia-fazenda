import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fazenda-ui';

  constructor(
    private config: PrimeNGConfig,
    private router: Router
  ) { }

  exibindoNavbar() {
    return this.router.url != '/login'
  }
}
