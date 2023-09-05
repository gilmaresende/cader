import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';

export abstract class SPage<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  public ob?: Entidade;

  constructor(
    title: string,
    private actions: ControlService,
    private services: Service
  ) {
    actions.build(this.ob, title, this, this.services);
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
    this.actions.setOb(ob);
  }
}
