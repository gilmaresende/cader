import { Component, Input } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { ConfirmDialogService } from './confirm-dialog.service';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class ConfirmDialogComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private service: ConfirmDialogService
  ) {
    service.setConfirmDialog(this);
  }

  public confirm(
    title: string,
    message: string,
    acceptFuncion: any,
    rejectFunction: any
  ) {
    this.confirmationService.confirm({
      message: message,
      header: title,
      icon: 'pi pi-exclamation-triangle',
      // accept: () => {
      //   alert('sim');
      // },
      // reject: () => {
      //   alert('nao');
      // },
      accept: acceptFuncion,
      reject: rejectFunction,
    });
  }
}
