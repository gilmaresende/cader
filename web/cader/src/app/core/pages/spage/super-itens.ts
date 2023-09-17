import { ModalImplService } from 'src/app/components/fusion/modal-impl/modal-impl.service';
import { SEntidade } from '../../model/sentidade';
import { ControlService } from '../../services/control.service';

export abstract class SItems {
  constructor(public serviceModalS: ModalImplService) {
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
}
