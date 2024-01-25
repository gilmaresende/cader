import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { StatePage } from '../../enuns/statePage';
import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { PagesService } from '../../services/pages.service';

export abstract class SPageList<
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
    private actions: PagesService,
    private services: Service
  ) {
    actions.setStatePage(StatePage.LIST);
    //actions.build(this.ob, title, this, this.services);
    actions.setRotaEntidade(`${this.services.rote}`);
    this.findAll();
  }

  public setOb(ob: Entidade) {
    this.ob = ob;
  }

  findAll() {
    this.actions.loading.showLoading();
    this.services.findAll().subscribe({
      next: (res) => {
        this.dataTableObserve.update(res.datas);
        this.list = res.datas;
        this.actions.loading.dropLoading();
      },
      error: (error) => {
        console.log(error);
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

  getOb() {
    return;
  }
}
