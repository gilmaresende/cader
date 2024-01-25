import { Injectable } from '@angular/core';
import { PagesService } from 'src/app/core/services/pages.service';
import { ModelFilterComponent } from './model-filter.component';
import { SPageListFilter } from 'src/app/core/pages/spage/super-page-list-filter';
import { SEntidade } from 'src/app/core/model/sentidade';
import { BaseHttpService } from 'src/app/core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ModelFilterService {
  private modelFilterComponent: ModelFilterComponent | null = null;
  ob: any;

  constructor(private PagesService: PagesService) {
    PagesService.setFilterService(this);
  }

  public setModal(modelFilterComponent: ModelFilterComponent) {
    this.modelFilterComponent = modelFilterComponent;
  }

  public showModel() {
    this.modelFilterComponent!.showDialog();
  }

  public toFilter() {
    const ob = this.PagesService.getModalFilter().getOb();
    const page = this.PagesService.page;
    if (page instanceof SPageListFilter) {
      const pageFilter = page as SPageListFilter<
        SEntidade,
        BaseHttpService<SEntidade>
      >;
      pageFilter.findFilter(ob);
      this.modelFilterComponent?.showDialog();
    }
  }

  public setOb(ob: any) {
    this.ob = ob;
  }
}
