import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';

export abstract class SPageList<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  public ob?: Entidade;
  public list: Array<{}> = [];
  constructor(
    title: string,
    roteEntiti: string,
    private actions: ControlService,
    private services: Service
  ) {
    actions.build(this.ob, title, this, this.services);
    actions.setRotaEntidade(roteEntiti);
    this.findAll();
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
    this.actions.setOb(ob);
  }

  findAll() {
    this.actions
      .getService()
      .findAll()
      .subscribe({
        next: (res) => {
          this.list = res.datas;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
