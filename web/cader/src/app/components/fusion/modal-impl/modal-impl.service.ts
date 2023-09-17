import { Injectable } from '@angular/core';
import { SEntidade } from 'src/app/core/model/sentidade';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { ModalImplComponent } from './modal-impl.component';

@Injectable({
  providedIn: 'root',
})
export class ModalImplService {
  ob: any;

  view?: SItems<SEntidade, BaseHttpService<SEntidade>>;

  async disabledFalse() {
    await this.view!.showViewFalse();
    this.view!.isDisabled = true;
    this.modal?.habiliteView();
    await this.view!.showViewTrue();
  }

  async disabledTrue() {
    await this.view!.showViewFalse();
    this.view!.isDisabled = false;
    this.modal?.habiliteEdit();
    await this.view!.showViewTrue();
  }

  functionNewItem?: () => void;

  setView(ob: SItems<SEntidade, BaseHttpService<SEntidade>>) {
    this.view = ob;
  }

  getView(): SItems<SEntidade, BaseHttpService<SEntidade>> {
    return this.view!;
  }

  setOb(ob: any) {
    this.ob = ob;
    this.view!.setOb(ob);
  }

  getOb() {
    return this.ob;
  }

  setFunctionNewItem(functionNewItem: () => void) {
    this.functionNewItem = functionNewItem;
  }

  executeFunctionNewItem() {
    this.functionNewItem!();
  }

  modal: ModalImplComponent | undefined;

  constructor() {}

  setModal(modal: ModalImplComponent) {
    this.modal = modal;
  }

  getModal() {
    return this.modal;
  }

  public clear() {
    this.view!.setOb(undefined);
    this.view!.showViewFalse();
  }

  public show() {
    this.modal!.show();
    this.view!.showViewTrue();
  }

  public setTitle(title: string) {
    this.modal!.setTitle(title);
  }

  save() {
    this.getView().save();
  }

  delete() {
     this.getView().delete();
  }
}
