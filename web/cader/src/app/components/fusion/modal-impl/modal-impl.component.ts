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

  stateView: boolean = true;

  title: string = '';
  rote: string = '';

  showModal: boolean = false;

  closeModal() {
    this.showModal = false;
  }

  public show() {
    this.showModal = true;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public save() {
    this.service.save();
  }

  editData() {
    this.habiliteEdit();
    this.service.disabledTrue();
  }

  habiliteView() {
    this.stateView = true;
  }

  habiliteEdit() {
    this.stateView = false;
  }

  deleteData() {
    this.service.delete();
  }
}
