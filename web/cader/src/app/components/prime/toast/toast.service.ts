import { Injectable } from '@angular/core';
import { ToastComponent } from './toast.component';
import { PagesService } from 'src/app/core/services/pages.service';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast: ToastComponent | null = null;

  constructor(private PagesService: PagesService) {
    PagesService.setToastService(this);
  }

  setToast(toast: ToastComponent) {
    this.toast = toast;
  }

  showSucess(msg: string) {
    this.toast?.showSuccess(msg);
  }

  showAlert(msg: string) {
    this.toast?.showWarn(msg);
  }

  catchErro(error: any) {
    console.log(error);
    if (error.status === 403) {
      this.showAlert('Invalid credentials');
    } else if (error.status === 400) {
      //  const erros = JSON.parse(error.error);
      const erros = error.error;
      console.log(erros.error);
      if (erros.errors) {
        erros.errors.map((element: any) => {
          this.showAlert(element.message);
        });
      } else if (erros.error) {
        this.showAlert(erros.message);
      }
    } else {
      console.log('code', error.status);
      console.log('detail', error);
    }
  }
}
