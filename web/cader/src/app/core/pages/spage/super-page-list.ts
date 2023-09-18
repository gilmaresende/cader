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
    private actions: ControlService,
    private services: Service
  ) {
    actions.setStatePage(StatePage.LIST);
    actions.build(this.ob, title, this, this.services);
    actions.setRotaEntidade(`${this.services.rote}`);
    this.findAll();
  }

  public setOb(ob: Entidade) {
    this.actions.showLoadingFalse();
    this.ob = ob;
    this.actions.setOb(ob);
    this.actions.showLoadingFalse();
  }

  findAll() {
    this.actions.loading.showLoading();
    this.actions.showLoadingTrue();
    this.actions
      .getService()
      .findAll()
      .subscribe({
        next: (res) => {
          this.actions.showLoadingFalse();
          this.list = res.datas;
          this.actions.loading.dropLoading();
        },
        error: (error) => {
          console.log(error);
          this.actions.showLoadingFalse();
          this.actions.loading.dropLoading();
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

  public findFilter(filter: any) {}
}
