import { Injectable } from '@angular/core';
import { PagesService } from 'src/app/core/services/pages.service';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  private confirmDialog: ConfirmDialogComponent | null = null;
  constructor(private PagesService: PagesService) {
    this.PagesService.setConfirmDialogService(this);
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
