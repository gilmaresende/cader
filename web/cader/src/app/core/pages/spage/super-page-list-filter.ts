import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { StatePage } from '../../enuns/statePage';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';

export abstract class SPageListFilter<
  Entidade extends SEntidade,
  Service extends BaseHttpService<Entidade>
> {
  public ob?: Entidade;
  public list: Array<{}> = [];
  public dataTableObserve: DataTableService<any> = new DataTableService<any>();

  loading: boolean = true;
  isDisabled: boolean = false;
  constructor(
    title: string,
    private actions: ControlService,
    private services: Service
  ) {
    actions.setStatePage(StatePage.LIST_FILTER);
    actions.build(this.ob, title, this, this.services);
    actions.setRotaEntidade(`${this.services.rote}`);
    this.findFilter(this.getFilterBase());
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
    this.actions.setOb(ob);
  }

  findFilter(filter: any) {
    this.actions.loading.showLoading();
    this.actions
      .getService()
      .findFilter(filter)
      .subscribe({
        next: (res) => {
          this.dataTableObserve.update(res.datas);
          this.list = res.datas;
          this.actions.loading.dropLoading();
        },
        error: (error) => {
          console.log(error); //TOFO-GF
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

  getFilterBase() {
    return this.services.getFilterBase();
  }

  getOb() {
    return;
  }
}
