import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { StatePage } from '../../enuns/statePage';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { PagesService } from '../../services/pages.service';

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
    private servicePage: PagesService,
    private services: Service
  ) {
    this.servicePage.setTitle(title);
    this.servicePage.setService(this.services);

    this.servicePage.setStatePage(StatePage.LIST_FILTER);
    //actions.build(this.ob, title, this, this.services);
    this.servicePage.setRotaEntidade(`${this.services.rote}`);
    this.servicePage.page = this;
    this.findFilter(this.getFilterBase());
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
  }

  findFilter(filter: any) {
    this.servicePage.loading.showLoading();
    this.servicePage
      .getService()
      .findFilter(filter)
      .subscribe({
        next: (res) => {
          this.dataTableObserve.update(res.datas);
          this.list = res.datas;
          this.servicePage.loading.dropLoading();
        },
        error: (error) => {
          console.log(error); //TOFO-GF
          this.servicePage.loading.dropLoading();
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
