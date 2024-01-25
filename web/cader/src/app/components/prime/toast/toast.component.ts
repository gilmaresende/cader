import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from './toast.service';
@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService],
})
export class ToastComponent {
  constructor(
    private messageService: MessageService,
    private service: ToastService
  ) {
    service.setToast(this);
  }

  showSuccess(msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: msg,
    });
  }

  showInfo(msg: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: msg,
    });
  }

  showWarn(msg: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: msg,
    });
  }

  showError(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: msg,
    });
  }
}
