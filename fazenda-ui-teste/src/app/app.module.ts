import { SetoresModule } from './setores/setores.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    CoreModule,
    SegurancaModule,
    SetoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
