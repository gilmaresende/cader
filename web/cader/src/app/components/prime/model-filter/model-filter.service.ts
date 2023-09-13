import { Injectable } from '@angular/core';
import { ModelFilterComponent } from './model-filter.component';
import { ControlService } from 'src/app/core/services/control.service';
import { SPageList } from 'src/app/core/pages/spage/super-page-list';

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
    const ob = this.controlService.getPageFilter().getOb();
    this.controlService.page?.findFilter(ob);
    this.modelFilterComponent?.showDialog();
  }

  public setOb(ob: any) {
    this.ob = ob;
  }
}
