import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { ExpenseCategory } from 'src/app/model/expense-category';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
@Component({
  selector: 'app-expense-category-view',
  templateUrl: './expense-category-view.component.html',
  styleUrls: ['./expense-category-view.component.scss'],
})
export class ExpenseCategoryViewComponent extends SPage<
  ExpenseCategory,
  ExpenseCategoryService
> {
  constructor(
    private service: ExpenseCategoryService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Categoria Despesa', service, factory, actRote);
  }

  override populatedForm(ob: ExpenseCategory) {
    this.form = this.formBuilder.group({
      name: [ob.name, Validators.required],
      active: [ob.active],
    });
  }

  override getOb(): ExpenseCategory {
    const form = this.form?.value;
    return form;
  }
}
