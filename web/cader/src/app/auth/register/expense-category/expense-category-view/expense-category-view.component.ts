import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumYesNo } from 'src/app/core/enuns/enumSimNao';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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

  // form = new FormGroup({
  //   id: new FormControl(0),
  //   name: new FormControl('', Validators.required),
  //   active: new FormControl(EnumYesNo.YES),
  //   update: new FormControl(new Date()),
  // });

  override populatedForm(ob: ExpenseCategory) {
    // const data = this.form.controls;
    // data.active.setValue(ob.active);
    // data.name.setValue(ob.name);
    // data.update.setValue(ob.update);
    // data.id.setValue(ob.id!);
  }

  override getOb(): ExpenseCategory {
    // const form = this.form.controls;
    // const ob: ExpenseCategory = {
    //   id: form.id.value as number,
    //   active: form.active.value as number,
    //   name: form.name.value as string,
    //   update: form.update.value as Date,
    // };
    // return ob;
    return this.service.newInstance();
  }
}
