import { Injectable } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';
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

  constructor(private controlService: ControlService) {
    controlService.setFilterService(this);
  }

  public setModal(modelFilterComponent: ModelFilterComponent) {
    this.modelFilterComponent = modelFilterComponent;
  }

  public showModel() {
    this.modelFilterComponent!.showDialog();
  }

  public toFilter() {
    const ob = this.controlService.getModalFilter().getOb();
    const page = this.controlService.page;
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
