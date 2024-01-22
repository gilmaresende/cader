import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ViewComponent } from 'src/app/auth/view/view.component';
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
import { ToolBarComponent } from 'src/app/templates/tool-bar/tool-bar.component';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  //----------------------------------------//relacionado ao core da aplicacao--------------------------------

  title: string = '';
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

  public obSelect?: SEntidade;
  rotaEntidade: string = '';

  //----------------------------------------  //contrutores--------------------------------
  constructor(private router: Router) {}

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

  setTooBar(tooBar: ToolBarComponent) {
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

  getOb(): SEntidade {
    const page = this.page;
    console.log(page);
    if (page instanceof SPage) {
      alert('insert');
      const pageEntity = page as SPage<SEntidade, BaseHttpService<SEntidade>>;
      const obj = pageEntity.getOb();
      return obj;
    } else {
      alert('not insert');
    }

    throw new Error('Pagina não Registro');
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
          this.reloadById(res.id!);
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
          this.reloadById(res.id!);
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

  async reloadById(id: number) {
    this.setStatePage(StatePage.VIEW);
    this.page?.findById(id);
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
    if (this.page instanceof SPage) {
      const pagePage = this.page as SPage<
        SEntidade,
        BaseHttpService<SEntidade>
      >;
      pagePage.newOb();
    }
    this.router.navigate([`${this.rotaEntidade}`]);
  }

  showFilter() {
    this.filterView.showModel();
  }

  setStatePage(state: StatePage) {
    this.statePage = state;
    if (state === StatePage.VIEW) {
      //  this.page?.setIsDisabled(true);
    } else {
      // this.page?.setIsDisabled(false);
    }
    if (this.toobar) this.toobar.checkState();
  }

  //####################################################################################################################################

  //---------------------------------------------barra de tarefas-----------------------------------------
  toobar!: ToolBarComponent;

  setToolbar(toobar: ToolBarComponent) {
    this.toobar = toobar;
  }

  getToolbar(): ToolBarComponent {
    return this.toobar;
  }

  //---------------------------------------------service-----------------------------------------

  service!: BaseHttpService<SEntidade>;

  setService(service: BaseHttpService<SEntidade>) {
    this.service = service;
  }

  getService(): BaseHttpService<SEntidade> {
    return this.service;
  }

  //---------------------------------------------isDisabled-----------------------------------------

  isDisabled?: ObservableElement;

  setIsDisabled(isDisabled: ObservableElement) {
    this.isDisabled = isDisabled;
  }

  getIsDisabled(): ObservableElement {
    return this.isDisabled!;
  }
}
