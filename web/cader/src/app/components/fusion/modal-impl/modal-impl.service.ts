import { Injectable } from '@angular/core';
import { SEntidade } from 'src/app/core/model/sentidade';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { ModalImplComponent } from './modal-impl.component';

@Injectable({
  providedIn: 'root',
})
export class ModalImplService {
  rote: string = '';

  ob: any;

  view?: SItems<SEntidade, BaseHttpService<SEntidade>>;

  setView(ob: SItems<SEntidade, BaseHttpService<SEntidade>>) {
    this.view = ob;
  }

  getView(): SItems<SEntidade, BaseHttpService<SEntidade>> {
    return this.view!;
  }

  setOb(ob: any) {
    this.ob = ob;
  }

  getOb() {
    return this.ob;
  }

  modal: ModalImplComponent | undefined;

  constructor() {}

  setModal(modal: ModalImplComponent) {
    this.modal = modal;
  }

  getModal() {
    return this.modal;
  }

  public show() {
    console.log(this.ob);
    this.view!.setOb(this.ob);
    this.modal!.show();
  }

  public setTitle(title: string) {
    this.modal!.setTitle(title);
  }

  save() {
    this.getView().save();
  }
}
