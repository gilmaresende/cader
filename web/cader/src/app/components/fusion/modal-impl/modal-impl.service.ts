import { Injectable } from '@angular/core';
import { ModalImplComponent } from './modal-impl.component';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { HttpServerService } from 'src/app/core/services/http-server.service';

@Injectable({
  providedIn: 'root',
})
export class ModalImplService {
  functionSave?: () => void;

  setfunctionSave(save: () => void) {
    this.functionSave = save;
  }
  rote: string = '';

  ob: any;

  view?: SItems;

  setView(ob: SItems) {
    this.view = ob;
  }

  getView(): SItems {
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
    this.functionSave!();
  }
}
