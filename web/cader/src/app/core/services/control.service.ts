import { Injectable } from '@angular/core';
import { SEntidade } from '../model/sentidade';
import { ToolbarComponent } from 'src/app/components/material/toolbar/toolbar.component';
import { SPage } from '../pages/spage/super-page';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  ob?: SEntidade;
  title: string = '';
  toobar?: ToolbarComponent;
  page?: SPage<SEntidade>;

  setTooBar(tooBar: ToolbarComponent) {
    this.toobar = tooBar;
  }

  constructor() {}

  build(ob: SEntidade | undefined, title: string, page: SPage<SEntidade>) {
    this.setOb(ob);
    this.page = page;
    if (this.toobar) {
      this.toobar.setTitle(title);
    }
  }

  setOb(ob: any) {
    this.ob = ob;
  }

  save() {
    console.log(this.ob);
    alert('save');
  }

  delete() {
    alert('delete');
  }

  edit() {
    alert('edit');
  }

  cancel() {
    alert('cancel');
  }

  getTitle() {
    return this.title;
  }
}
