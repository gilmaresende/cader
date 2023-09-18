import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { SEntidade } from '../../model/sentidade';
import { ControlService } from '../../services/control.service';
import { BaseHttpService } from '../../services/base-http.service';

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
  isDisabled: boolean = false;

  //atributo que defini de o conteudo da tela(modal) sera exibido ou não
  exibir: boolean = false;

  //objeto com as informações na tela
  ob?: SEntidade;

  //-----------------------------------------------------------------------------------
  //gets e sets
  //-----------------------------------------------------------------------------------

  //recupera o objeto atual na tela
  getOb(): SEntidade {
    return this.ob!;
  }

  //defini o objeto atual na tela
  setOb(ob: SEntidade | undefined) {
    this.ob = ob;
  }

  //-----------------------------------------------------------------------------------
  //ações
  //-----------------------------------------------------------------------------------

  //defini que o conteudo da tela vai ser exibido
  showViewTrue() {
    this.exibir = true;
  }

  //defini que o conteudo da tela nao vai ser exibido
  showViewFalse() {
    this.exibir = false;
  }

  //chamada da api para salvar objeto atual da tela
  save() {
    this.controllerS.loading.showLoading();
    this.serviceItem.create(this.serviceModalS.getOb()).subscribe({
      next: (res) => {
        this.controllerS.getControllerToast().showSucess(res.message);
        this.controllerS.reload();
        this.controllerS.loading.dropLoading();
      },
      error: (er) => {
        this.controllerS.getControllerToast().catchErro(er);
        this.controllerS.loading.dropLoading();
      },
    });
  }

  //chamada da api para apagar objeto atual da tela
  delete() {
    this.controllerS.loading.showLoading();
    this.serviceItem.delete(this.serviceModalS.getOb().id).subscribe({
      next: (res) => {
        this.controllerS.getControllerToast().showSucess(res.message);
        this.controllerS.reload();
        this.controllerS.loading.dropLoading();
      },
      error: (er) => {
        this.controllerS.getControllerToast().catchErro(er);
        this.controllerS.loading.dropLoading();
      },
    });
  }
}