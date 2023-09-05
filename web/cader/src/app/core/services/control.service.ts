import { Injectable } from '@angular/core';
import { SEntidade } from '../model/sentidade';
import { ToolbarComponent } from 'src/app/components/material/toolbar/toolbar.component';
import { SPage } from '../pages/spage/super-page';
import { SidebarComponent } from 'src/app/components/prime/sidebar/sidebar.component';
import { BaseHttpService } from './base-http.service';
import { SPageList } from '../pages/spage/super-page-list';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  ob?: SEntidade;
  title: string = '';
  toobar!: ToolbarComponent;
  sidebar!: SidebarComponent;
  service!: BaseHttpService<SEntidade>;
  page?:
    | SPage<SEntidade, BaseHttpService<SEntidade>>
    | SPageList<SEntidade, BaseHttpService<SEntidade>>;

  setTooBar(tooBar: ToolbarComponent) {
    this.toobar = tooBar;
  }

  setSideBar(sidebar: SidebarComponent) {
    this.sidebar = sidebar;
  }

  setService(service: BaseHttpService<SEntidade>) {
    this.service = service;
  }

  getService(): BaseHttpService<SEntidade> {
    return this.service;
  }

  constructor() {}

  build(
    ob: SEntidade | undefined,
    title: string,
    page:
      | SPageList<SEntidade, BaseHttpService<SEntidade>>
      | SPage<SEntidade, BaseHttpService<SEntidade>>,
    service: BaseHttpService<SEntidade>
  ) {
    this.setService(service);
    this.setOb(ob);
    this.page = page;
    this.title = title;
    if (this.toobar) {
      this.toobar.setTitle(title);
    }
  }

  setOb(ob: any) {
    this.ob = ob;
  }

  save() {
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

  showSidebar() {
    this.sidebar?.showSideBar();
  }
}
