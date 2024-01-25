import { Injectable } from '@angular/core';
import { SEntidade } from 'src/app/core/model/sentidade';
import { SItems } from 'src/app/core/pages/spage/super-itens';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { ModalImplComponent } from './modal-impl.component';

@Injectable({
  providedIn: 'root',
})
export class ModalImplService {
  constructor() {}

  //tela dentro do model, a que é exibida
  view?: SItems<SEntidade, BaseHttpService<SEntidade>>;

  //model, recebe a tela que sera exibida
  modal: ModalImplComponent | undefined;

  //------------------------------------------------------------------------------------
  //gets e sets
  //------------------------------------------------------------------------------------

  //defini qual é a tela dentro do modal para exibicao
  setView(ob: SItems<SEntidade, BaseHttpService<SEntidade>>) {
    this.view = ob;
  }

  //pega qual é a tela esta dentro do modal sendo exibida
  getView(): SItems<SEntidade, BaseHttpService<SEntidade>> {
    return this.view!;
  }

  //defini o objeto atual na tela
  setOb(ob: any) {
    this.view!.setOb(ob);
  }

  //pega o objeto atual na tela
  getOb(): SEntidade {
    return this.view!.getOb();
  }

  //defini o model, função usada para ter controle da instancia,
  // podendo controlar o model onde usa este service
  setModal(modal: ModalImplComponent) {
    this.modal = modal;
  }

  //pegar a class do model
  getModal() {
    return this.modal;
  }

  //defini o titulo do modal
  public setTitle(title: string) {
    this.modal!.setTitle(title);
  }

  //------------------------------------------------------------------------------------
  //Ações
  //------------------------------------------------------------------------------------

  //bloqueia edição a tela, desabilita o icone de salvar
  // habilita o icone de iditar e o icone de deletar
  async disabledFalse() {
    this.view!.isDisabled.emmiter(false);
    this.modal?.habiliteView();
  }

  //habilita edição a tela, desabilita o  icone de iditar e o icone de deletar
  // habilita o icone de salvar
  async disabledTrue() {
    this.view!.isDisabled.emmiter(false);
    this.modal?.habiliteEdit();
  }

  //limpa o objeto atual na tela e na memoria
  //TODO-GF{SERA QUE PODE REMOVER O SHOWVIEWFALSE?}
  public clear() {
    this.view!.setOb(undefined);
  }

  //mostra o modal aberto
  public show() {
    this.modal!.show();
  }

  public close() {
    this.modal!.closeModal();
  }

  //faz a chamada para salvar o objeto atual na tela
  save() {
    this.getView().save();
  }

  //faz a chamada para deletar o objeto atual na tela
  delete() {
    this.getView().delete();
  }
}
