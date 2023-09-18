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
import { SPageListFilter } from '../pages/spage/super-page-list-filter';
import { ModelFilterService } from 'src/app/components/prime/model-filter/model-filter.service';
import { SFilter } from '../pages/spage/super-filter';
import { LoadingComponent } from 'src/app/components/fusion/loading/loading.component';

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
  filterView!: ModelFilterService;
  pageFilter!: SFilter;
  loading!: LoadingComponent;

  page?:
    | SPage<SEntidade, BaseHttpService<SEntidade>>
    | SPageList<SEntidade, BaseHttpService<SEntidade>>
    | SPageListFilter<SEntidade, BaseHttpService<SEntidade>>;

  //----------------------------------------  //relacionado a entidade da tela--------------------------------

  ob?: any;
  public obSelect?: SEntidade;
  service!: BaseHttpService<SEntidade>;
  rotaEntidade: string = '';

  //----------------------------------------  //contrutores--------------------------------
  constructor(private router: Router) {}

  build(
    ob: SEntidade | undefined,
    title: string,
    page:
      | SPageList<SEntidade, BaseHttpService<SEntidade>>
      | SPage<SEntidade, BaseHttpService<SEntidade>>
      | SPageListFilter<SEntidade, BaseHttpService<SEntidade>>,
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

  setFilterService(filterView: ModelFilterService) {
    this.filterView = filterView;
  }

  setPageFilter(pageFilter: SFilter) {
    this.pageFilter = pageFilter;
  }

  getPageFilter() {
    return this.pageFilter;
  }

  getControllerToast(): ToastService {
    return this.toastService!;
  }

  setLoading(loading: LoadingComponent) {
    this.loading = loading;
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

  setObSelect(ob: any) {
    this.obSelect = ob;
  }

  getObSelect(): SEntidade | undefined {
    return this.obSelect;
  }

  setRotaEntidade(rota: string) {
    this.rotaEntidade = `cader/${rota}`;
  }

  getRouter(): Router {
    return this.router;
  }

  //----------------------------------------------------------Actions----------------------------------------

  async save() {
    this.loading.showLoading();
    this.showLoadingTrue();
    if (this.ob!.id! > 0) {
      this.service.update(this.ob!).subscribe({
        next: (res) => {
          this.getOb()!.update = res.update;
          this.showLoadingFalse();
          this.setStatePage(StatePage.VIEW);
          this.toastService!.showSucess(res.message);
          this.loading.dropLoading();
        },
        error: (error) => {
          if (error.error) {
            this.toastService!.showAlert(error.error.error);
          } else {
            this.toastService!.catchErro(error);
          }
          this.showLoadingFalse();
          this.setStatePage(StatePage.VIEW);
          this.loading.dropLoading();
        },
      });
    } else {
      await this.service.create(this.ob!).subscribe({
        next: (res) => {
          this.router.navigate([`cader/${res.rotaOb}`]);
          this.toastService!.showSucess(res.message);
          this.loading.dropLoading();
        },
        error: (error) => {
          if (error.error) {
            this.toastService!.showAlert(error.error.error);
          } else {
            this.toastService!.catchErro(error);
          }
          this.showLoadingFalse();
          this.setStatePage(StatePage.VIEW);
          this.loading.dropLoading();
        },
      });
    }
  }

  delete() {
    this.loading.showLoading();
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
              this.loading.dropLoading();
            },
            error: (error) => {
              if (error.error) {
                this.toastService!.showAlert(error.error.error);
              } else {
                console.log(error);
              }
              this.showLoadingFalse();
              this.setStatePage(StatePage.VIEW);
              this.loading.dropLoading();
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

  async reload() {
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
    if (!this.obSelect) {
      this.toastService?.showAlert('Selecione um registro para carregar!');
      return;
    }
    this.router.navigate([`${this.rotaEntidade}/${this.obSelect.id}`]);
  }

  async newOb() {
    this.setStatePage(StatePage.INSERT);
    this.router.navigate([`${this.rotaEntidade}`]);
  }

  showFilter() {
    this.filterView.showModel();
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
