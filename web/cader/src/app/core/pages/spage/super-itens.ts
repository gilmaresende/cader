import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { SEntidade } from '../../model/sentidade';
import { ControlService } from '../../services/control.service';
import { BaseHttpService } from '../../services/base-http.service';

export abstract class SItems<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  constructor(
    public serviceModalS: ModalImplService,
    private serviceItem: Service,
    private controllerS: ControlService
  ) {
    serviceModalS.setView(this);
  }

  public exibir: boolean = false;

  ob?: SEntidade;
  getOb(): SEntidade {
    return this.ob!;
  }
  public setOb(ob: SEntidade) {
    this.ob = ob;
    this.exibir = true;
  }

  save() {
    console.log('to going save');
    this.serviceItem.create(this.serviceModalS.getOb()).subscribe({
      next: (res) => {
        this.controllerS.reload();
      },
      error: (er) => console.log(er),
    });
  }
}
