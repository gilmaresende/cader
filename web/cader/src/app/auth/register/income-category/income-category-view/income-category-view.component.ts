import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumYesNo } from 'src/app/core/enuns/enumSimNao';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { PagesService } from 'src/app/core/services/pages.service';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { IncomeCategory } from 'src/app/model/income-category';
import { IncomeCategoryService } from 'src/app/services/income-category.service';

@Component({
  selector: 'app-income-category-view',
  templateUrl: './income-category-view.component.html',
  styleUrls: ['./income-category-view.component.scss'],
})
export class IncomeCategoryViewComponent extends SPage<
  IncomeCategory,
  IncomeCategoryService
> {
  override populatedForm(ob: IncomeCategory) {
    this.form = this.formBuilder.group({
      name: [ob.name, Validators.required],
      active: [ob.active],
    });
  }
  constructor(
    private service: IncomeCategoryService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Categoria Receita', service, factory, actRote);
  }

  override getOb(): IncomeCategory {
    const form = this.form?.value;
    return form;
  }
}
