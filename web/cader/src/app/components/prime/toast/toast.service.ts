import { Injectable } from '@angular/core';
import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast: ToastComponent | null = null;

  constructor() {}

  setToast(toast: ToastComponent) {
    this.toast = toast;
  }

  showSucess(msg: string) {
    this.toast?.showSuccess(msg);
  }

  showAlert(msg: string) {
    this.toast?.showWarn(msg);
  }
}
