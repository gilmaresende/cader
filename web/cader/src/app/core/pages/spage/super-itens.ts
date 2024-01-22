import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { SEntidade } from '../../model/sentidade';
import { ControlService } from '../../services/control.service';
import { BaseHttpService } from '../../services/base-http.service';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

export abstract class SItems<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  constructor(
    private serviceModalS: ModalImplService,
    private serviceItem: Service,
    private controllerS: ControlService
  ) {
    serviceModalS.setView(this);
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
      this.populateForm(ob);
    }
  }

  //-----------------------------------------------------------------------------------
  //ações
  //-----------------------------------------------------------------------------------
  //chamada da api para salvar objeto atual da tela
  save() {
    this.controllerS.loading.showLoading();
    const ob = this.serviceModalS.getOb();
    if (!ob.id) {
      this.serviceItem.create(ob as Entidade).subscribe({
        next: (res) => {
          this.controllerS.getControllerToast().showSucess(res.message);
          this.controllerS.reload();
          this.serviceModalS.close();
          this.controllerS.loading.dropLoading();
        },
        error: (er) => {
          this.controllerS.getControllerToast().catchErro(er);
          this.controllerS.loading.dropLoading();
        },
      });
    } else {
      this.serviceItem.update(ob as Entidade).subscribe({
        next: (res) => {
          this.controllerS.getControllerToast().showSucess(res.message);
          this.controllerS.reload();
          this.serviceModalS.close();
          this.controllerS.loading.dropLoading();
        },
        error: (er) => {
          this.controllerS.getControllerToast().catchErro(er);
          this.controllerS.loading.dropLoading();
        },
      });
    }
  }

  //chamada da api para apagar objeto atual da tela
  delete() {
    this.controllerS.loading.showLoading();
    const id = this.serviceModalS.getOb().id!;
    this.serviceItem.delete(id).subscribe({
      next: (res) => {
        this.controllerS.getControllerToast().showSucess(res.message);
        this.controllerS.reload();
        this.controllerS.loading.dropLoading();
        this.serviceModalS.close();
      },
      error: (er) => {
        this.controllerS.getControllerToast().catchErro(er);
        this.controllerS.loading.dropLoading();
      },
    });
  }

  //chama a implementação do form para popular a tela
  abstract populateForm(ob: Entidade): void;

  //implementar a transformar form em objeto
  abstract getByForm(): Entidade;
}
