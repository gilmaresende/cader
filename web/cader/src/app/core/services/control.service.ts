import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ViewComponent } from 'src/app/auth/view/view.component';
import { ToolbarComponent } from 'src/app/components/material/toolbar/toolbar.component';
import { SidebarComponent } from 'src/app/components/prime/sidebar/sidebar.component';
import { ToastService } from 'src/app/components/prime/toast/toast.service';
import { SEntidade } from '../model/sentidade';
import { SPage } from '../pages/spage/super-page';
import { SPageList } from '../pages/spage/super-page-list';
import { BaseHttpService } from './base-http.service';
import { StatePage } from '../enuns/statePage';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  ob?: SEntidade;
  title: string = '';
  toobar!: ToolbarComponent;
  sidebar!: SidebarComponent;
  service!: BaseHttpService<SEntidade>;
  toastService?: ToastService;
  rotaEntidade: string = '';
  superView!: ViewComponent;
  statePage: StatePage = StatePage.HOME;
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

  setOb(ob: any) {
    this.ob = ob;
  }

  getOb(): SEntidade | undefined {
    return this.ob;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title: string) {
    this.title = title;
    if (this.toobar) {
      this.toobar.setTitle(title);
    }
  }

  setToastService(toastService: ToastService) {
    this.toastService = toastService;
  }

  setRotaEntidade(rota: string) {
    this.rotaEntidade = `cader/${rota}`;
  }

  setSuperView(superView: ViewComponent) {
    this.superView = superView;
  }

  constructor(private router: Router) {}

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

  save() {
    alert('save');
    console.log(this.ob);
  }

  delete() {
    alert('delete');
  }

  edit() {
    this.setStatePage(StatePage.EDIT);
  }

  cancel() {
    alert('cancel');
  }

  showSidebar() {
    this.sidebar?.showSideBar();
  }

  load() {
    if (!this.ob) {
      this.toastService?.showAlert('Selecione um registro para carregar!');
      return;
    }
    this.setStatePage(StatePage.VIEW);
    this.router.navigate([`${this.rotaEntidade}/${this.ob.id}`]);
  }

  async newOb() {
    this.setStatePage(StatePage.INSERT);
    this.router.navigate([`${this.rotaEntidade}`]);
  }

  showLoadingFalse() {
    this.superView.alterLoading(false);
    this.page?.alterLoading(true);
  }

  showLoadingTrue() {
    this.superView.alterLoading(true);
    this.page?.alterLoading(false);
  }

  setStatePage(state: StatePage) {
    this.statePage = state;
    if (state === StatePage.VIEW) {
      this.page?.setIsDisabled(true);
    } else {
      this.page?.setIsDisabled(false);
    }
    if (this.toobar) this.toobar.checkState();
  }
}
