import { ObservableElement } from 'src/app/struct/observable/observable-element.service';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { FactoryCoreService } from '../../services/factory-core.service';
import { PagesService } from '../../services/pages.service';
import { FormBuilder, FormGroup } from '@angular/forms';

export abstract class SItems<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  servicePage: PagesService;
  private serviceModal;
  formBuilder: FormBuilder;

  form!: FormGroup;
  ob: Entidade | undefined;
  constructor(
    private serviceItem: Service,
    private factoryCoreService: FactoryCoreService
  ) {
    this.servicePage = factoryCoreService.getSuperControl();
    this.serviceModal = factoryCoreService.getServiceModal();
    this.formBuilder = factoryCoreService.getFormBuilder();
    this.serviceModal.setView(this);
  }

  //-----------------------------------------------------------------------------------
  //atributos
  //-----------------------------------------------------------------------------------

  //atributo que defini se a tela(modal) esta em modo editavel ou não
  isDisabled: ObservableElement = new ObservableElement();

  //-----------------------------------------------------------------------------------
  //gets e sets
  //-----------------------------------------------------------------------------------

  //recupera o objeto atual na tela
  getOb(): SEntidade {
    return this.getByForm();
  }

  //defini o objeto atual na tela
  setOb(ob: Entidade | undefined) {
    if (ob) {
      this.ob = ob;
      this.populateForm(ob);
    }
  }

  //-----------------------------------------------------------------------------------
  //ações
  //-----------------------------------------------------------------------------------
  //chamada da api para salvar objeto atual da tela
  save() {
    this.servicePage.loading.showLoading();
    let ob = this.serviceModal.getOb();

    if (this.ob) {
      Object.assign(this.ob, ob);
      ob = this.ob;
    }
    if (!ob.id) {
      console.log('new');
      this.serviceItem.create(ob as Entidade).subscribe({
        next: (res) => {
          this.servicePage.getControllerToast().showSucess(res.message);
          this.serviceModal.close();
          this.servicePage.loading.dropLoading();
          this.servicePage.reload();
        },
        error: (er) => {
          this.servicePage.getControllerToast().catchErro(er);
          this.servicePage.loading.dropLoading();
        },
      });
    } else {
      console.log('update');
      this.serviceItem.update(ob as Entidade).subscribe({
        next: (res) => {
          this.servicePage.getControllerToast().showSucess(res.message);
          this.servicePage.reload();
          this.serviceModal.close();
          this.servicePage.loading.dropLoading();
        },
        error: (er) => {
          this.servicePage.getControllerToast().catchErro(er);
          this.servicePage.loading.dropLoading();
        },
      });
    }
  }

  //chamada da api para apagar objeto atual da tela
  delete() {
    this.servicePage.loading.showLoading();
    const id = this.serviceModal.getOb().id!;
    this.serviceItem.delete(id).subscribe({
      next: (res) => {
        this.servicePage.getControllerToast().showSucess(res.message);
        this.servicePage.reload();
        this.servicePage.loading.dropLoading();
        this.serviceModal.close();
      },
      error: (er) => {
        this.servicePage.getControllerToast().catchErro(er);
        this.servicePage.loading.dropLoading();
      },
    });
  }

  setIsDisabled(value: boolean) {
    this.isDisabled.emmiter(value);
  }

  //chama a implementação do form para popular a tela
  abstract populateForm(ob: Entidade): void;

  //implementar a transformar form em objeto
  abstract getByForm(): Entidade;
}
