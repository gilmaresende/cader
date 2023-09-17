import { Component } from '@angular/core';
import { ModalImplService } from './modal-impl.service';

@Component({
  selector: 'modal-impl',
  templateUrl: './modal-impl.component.html',
  styleUrls: ['./modal-impl.component.scss'],
})
export class ModalImplComponent {
  constructor(private service: ModalImplService) {
    service.setModal(this);
  }

  //----------------------------------------------------------------------
  //atributos
  //----------------------------------------------------------------------

  //estado se a tela esta em modo visualizar ou editar
  stateView: boolean = true;

  //titulo da barra do medo
  title: string = '';

  //defini se o modal esta sendo exibido
  showModal: boolean = false;

  //----------------------------------------------------------------------
  //gets e sets
  //----------------------------------------------------------------------

  //Defini o titulo do modal
  public setTitle(title: string) {
    this.title = title;
  }

  //----------------------------------------------------------------------
  //actions
  //----------------------------------------------------------------------

  //fecha o modal
  closeModal() {
    this.showModal = false;
  }

  //abri o modal
  public show() {
    this.showModal = true;
  }

  //passa a chamada de salvar ao service que controla o modal
  public save() {
    this.service.save();
  }

  //defini o status da tela como editavel
  //este atributo controla quais icones estão sendo exibidos na barra
  habiliteEdit() {
    this.stateView = false;
  }

  //repassa ao service controlador que o status do corpo da tela sera editavel
  editData() {
    this.habiliteEdit();
    this.service.disabledTrue();
  }

  //defini que o stado do modal sera de visualização
  habiliteView() {
    this.stateView = true;
  }

  //repassa ao service controlador a solicitação de deletar o registro da tela
  deleteData() {
    this.service.delete();
  }
}
