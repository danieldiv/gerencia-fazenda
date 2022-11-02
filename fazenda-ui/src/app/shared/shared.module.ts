import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';

import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,

    CardModule,
    PanelModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
  ],
  exports: [
    MessageComponent,
    DialogModule,

    DialogModule,
    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
  ]
})
export class SharedModule { }
