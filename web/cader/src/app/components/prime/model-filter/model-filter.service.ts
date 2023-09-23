import { Injectable } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';
import { ModelFilterComponent } from './model-filter.component';

@Injectable({
  providedIn: 'root',
})
export class ModelFilterService {
  private modelFilterComponent: ModelFilterComponent | null = null;
  ob: any;

  constructor(private controlService: ControlService) {
    console.log('build model filter');
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
    this.controlService.page?.findFilter(ob);
    this.modelFilterComponent?.showDialog();
  }

  public setOb(ob: any) {
    this.ob = ob;
  }
}
