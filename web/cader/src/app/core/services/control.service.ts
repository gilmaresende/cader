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
import { ConfirmDialogService } from 'src/app/components/prime/confirm-dialog/confirm-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  //----------------------------------------//relacionado ao core da aplicacao--------------------------------

  title: string = '';
  toobar!: ToolbarComponent;
  sidebar!: SidebarComponent;
  toastService?: ToastService;
  confirmDialogService?: ConfirmDialogService;
  statePage: StatePage = StatePage.HOME;
  superView!: ViewComponent;
  page?:
    | SPage<SEntidade, BaseHttpService<SEntidade>>
    | SPageList<SEntidade, BaseHttpService<SEntidade>>;

  //----------------------------------------  //relacionado a entidade da tela--------------------------------

  ob?: SEntidade;
  service!: BaseHttpService<SEntidade>;
  rotaEntidade: string = '';

  //----------------------------------------  //contrutores--------------------------------
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
      this.toobar.checkState();
    }
  }

  //-----------------------------------------//gets e setes relacionado a aplicacao---------------------------------

  getTitle() {
    return this.title;
  }

  setTitle(title: string) {
    this.title = title;
    if (this.toobar) {
      this.toobar.checkState();
    }
  }

  setTooBar(tooBar: ToolbarComponent) {
    this.toobar = tooBar;
  }

  setSideBar(sidebar: SidebarComponent) {
    this.sidebar = sidebar;
  }

  setToastService(toastService: ToastService) {
    this.toastService = toastService;
  }

  setConfirmDialogService(confirmDialogService: ConfirmDialogService) {
    this.confirmDialogService = confirmDialogService;
  }

  setSuperView(superView: ViewComponent) {
    this.superView = superView;
  }
  //-----------------------------------------------get e set relacionado a entidades---------------------------

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

  setRotaEntidade(rota: string) {
    this.rotaEntidade = `cader/${rota}`;
  }

  getRouter(): Router {
    return this.router;
  }

  //----------------------------------------------------------Actions----------------------------------------

  async save() {
    this.showLoadingTrue();
    if (this.ob!.id! > 0) {
      this.service.update(this.ob!).subscribe({
        next: (res) => {
          this.getOb()!.update = res.update;
          this.showLoadingFalse();
          this.setStatePage(StatePage.VIEW);
          this.toastService!.showSucess(res.message);
        },
        error: (error) => {
          if (error.error) {
            this.toastService!.showAlert(error.error.error);
          } else {
            console.log(error);
          }
          this.showLoadingFalse();
          this.setStatePage(StatePage.VIEW);
        },
      });
    } else {
      await this.service.create(this.ob!).subscribe({
        next: (res) => {
          this.router.navigate([`cader/${res.rotaOb}`]);
          this.toastService!.showSucess(res.message);
        },
        error: (error) => {
          if (error.error) {
            this.toastService!.showAlert(error.error.error);
          } else {
            console.log(error);
          }
          this.showLoadingFalse();
          this.setStatePage(StatePage.VIEW);
        },
      });
    }
  }

  delete() {
    if (this.ob!.id! > 0) {
      this.confirmDialogService!.showDialog(
        'Confirmar Exclusão',
        'Realmente deseja apagar este registro? Esta ação não pode ser desfeita!',
        () => {
          this.service.delete(this.ob!.id!).subscribe({
            next: (res) => {
              this.getOb()!.update = res.update;
              this.showLoadingFalse();
              this.toastService!.showSucess(res.message);
              this.setStatePage(StatePage.LIST);
              this.router.navigate([`${this.rotaEntidade}/list`]);
            },
            error: (error) => {
              if (error.error) {
                this.toastService!.showAlert(error.error.error);
              } else {
                console.log(error);
              }
              this.showLoadingFalse();
              this.setStatePage(StatePage.VIEW);
            },
          });
        },
        () => {}
      );
    }
  }

  edit() {
    this.setStatePage(StatePage.EDIT);
  }

  async cancel() {
    this.setStatePage(StatePage.VIEW);
    this.page?.findById(this.ob!.id!);
  }

  goToList() {
    this.router.navigate([`cader/${this.service.rote}/list`]);
  }

  showSidebar() {
    this.sidebar?.showSideBar();
  }

  load() {
    if (!this.ob) {
      this.toastService?.showAlert('Selecione um registro para carregar!');
      return;
    }
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
