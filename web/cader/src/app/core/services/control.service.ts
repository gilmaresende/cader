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
  filterView!: ModelFilterService;
  modalFilter!: SFilter<any>;
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

  setFilterService(filterView: ModelFilterService) {
    this.filterView = filterView;
  }

  getFilterService() {
    return this.filterView;
  }

  setModalFilter(modalFilter: SFilter<any>) {
    this.modalFilter = modalFilter;
  }

  getModalFilter() {
    return this.modalFilter;
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

  getOb(): SEntidade {
    const page = this.page;
    const obj = page!.getOb() as SEntidade;
    return obj;
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
    const obj: SEntidade = this.getOb();
    //TODO DELETAR OB
    if (obj.id! > 0) {
      this.service.update(obj).subscribe({
        next: (res) => {
          this.toastService!.showSucess(res.message);
          this.reload();
        },
        error: (error) => {
          if (error.error) {
            this.toastService!.showAlert(error.error.error);
          } else {
            this.toastService!.catchErro(error);
          }
          this.setStatePage(StatePage.EDIT);
          this.loading.dropLoading();
        },
      });
    } else {
      await this.service.create(obj).subscribe({
        next: (res) => {
          this.router.navigate([`cader/${res.rotaOb}`]);
          this.toastService!.showSucess(res.message);
          this.loading.dropLoading();
        },
        error: (error) => {
          console.log(error);
          this.toastService!.catchErro(error);
          this.setStatePage(StatePage.EDIT);
          this.loading.dropLoading();
        },
      });
    }
  }

  delete() {
    this.loading.showLoading();
    const obj: SEntidade = this.getOb();
    if (obj.id! > 0) {
      this.confirmDialogService!.showDialog(
        'Confirmar Exclusão',
        'Realmente deseja apagar este registro? Esta ação não pode ser desfeita!',
        () => {
          this.service.delete(obj.id!).subscribe({
            next: (res) => {
              this.getOb()!.update = res.update;
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
    const obj: SEntidade = this.getOb();
    this.page?.findById(obj.id!);
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
