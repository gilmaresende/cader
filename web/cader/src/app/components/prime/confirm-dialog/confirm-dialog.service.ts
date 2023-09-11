import { Injectable } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  private confirmDialog: ConfirmDialogComponent | null = null;
  constructor(private controlService: ControlService) {
    this.controlService.setConfirmDialogService(this);
  }

  public showDialog(
    title: string,
    message: string,
    acceptFuncion: any,
    rejectFunction: any
  ) {
    this.confirmDialog!.confirm(title, message, acceptFuncion, rejectFunction);
  }

  public setConfirmDialog(confirmDialog: ConfirmDialogComponent) {
    this.confirmDialog = confirmDialog;
  }
}
