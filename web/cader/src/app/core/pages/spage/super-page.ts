import { SEntidade } from '../../model/sentidade';
import { ControlService } from '../../services/control.service';

export abstract class SPage<Entidade extends SEntidade> {
  public ob?: Entidade;

  constructor(title: string, private action: ControlService) {
    action.build(this.ob, title, this);
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
    this.action.setOb(ob);
  }
}
