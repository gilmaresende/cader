import { StatePage } from '../../enuns/statePage';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';

export abstract class SPageList<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  public ob?: Entidade;
  public list: Array<{}> = [];

  loading: boolean = true;
  isDisabled: boolean = false;
  constructor(
    title: string,
    roteEntiti: string,
    private actions: ControlService,
    private services: Service
  ) {
    actions.setStatePage(StatePage.LIST);
    actions.build(this.ob, title, this, this.services);
    actions.setRotaEntidade(roteEntiti);
    this.findAll();
  }

  public setOb(ob: Entidade) {
    this.actions.showLoadingFalse();
    this.ob = ob;
    console.log(ob);
    this.actions.setOb(ob);
    this.actions.showLoadingFalse();
  }

  findAll() {
    this.actions.showLoadingTrue();
    this.actions
      .getService()
      .findAll()
      .subscribe({
        next: (res) => {
          this.actions.showLoadingFalse();
          this.list = res.datas;
        },
        error: (error) => {
          console.log(error);
          this.actions.showLoadingFalse();
        },
      });
  }

  public alterLoading(isLoading: boolean) {
    this.loading = isLoading;
  }

  public clearScreen() {}

  public setIsDisabled(valueIsDisable: boolean) {
    this.isDisabled = valueIsDisable;
  }

  async findById(id: number) {}
}
