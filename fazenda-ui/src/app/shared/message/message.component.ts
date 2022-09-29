import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()"
      class="p-message p-message-error">
      {{ text }}
    </div>
  `,
  styles: [`
    .p-message-error {
      margin: 0;
      margin-top: 4px;
      padding: 3px;
    }
  `],
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() error: string = '';
  @Input() contro?: AbstractControl | FormControl | null;
  @Input() text: string = '';

  temErro() {
    return this.contro ? this.contro.hasError(this.error) && this.contro.dirty : true;
  }
}
