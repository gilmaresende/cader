import { FormBuilder } from '@angular/forms';
import { FactoryCoreService } from '../../services/factory-core.service';
import { PagesService } from '../../services/pages.service';

export abstract class SFilter<Filter> {
  formBuilder: FormBuilder;
  servicePage: PagesService;
  constructor(private factoryCoreService: FactoryCoreService) {
    this.formBuilder = factoryCoreService.getFormBuilder();
    this.servicePage = factoryCoreService.getSuperControl();

    this.servicePage.setModalFilter(this);
  }

  abstract getOb(): Filter;
}
