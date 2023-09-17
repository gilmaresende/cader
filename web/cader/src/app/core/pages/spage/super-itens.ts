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

  isDisabled: boolean = false;

  exibir: boolean = false;

  ob?: SEntidade;
  getOb(): SEntidade {
    return this.ob!;
  }
  public setOb(ob: SEntidade | undefined) {
    this.ob = ob;
  }

  showViewTrue() {
    this.exibir = true;
  }

  showViewFalse() {
    this.exibir = false;
  }

  save() {
    console.log('to going save'); //TODO-GF
    this.serviceItem.create(this.serviceModalS.getOb()).subscribe({
      next: (res) => {
        console.log(res);
        this.controllerS.reload();
      },
      error: (er) => console.log(er),
    });
  }

  delete() {
    console.log('to going delete'); //TODO-GF
    this.serviceItem.delete(this.serviceModalS.getOb().id).subscribe({
      next: (res) => {
        console.log(res);
        this.controllerS.reload();
      },
      error: (er) => console.log(er),
    });
  }
}
