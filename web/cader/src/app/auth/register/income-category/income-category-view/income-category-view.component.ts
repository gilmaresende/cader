import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumYesNo } from 'src/app/core/enuns/enumSimNao';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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
    // throw new Error('Method not implemented.');
  }
  constructor(
    private service: IncomeCategoryService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Categoria Receita', service, factory, actRote);
  }

  // form = new FormGroup({
  //   id: new FormControl(0),
  //   name: new FormControl('', Validators.required),
  //   active: new FormControl(EnumYesNo.YES),
  //   update: new FormControl(new Date()),
  // });

  // override populatedForm(ob: IncomeCategory) {
  //   const data = this.form.controls;
  //   data.active.setValue(ob.active);
  //   data.name.setValue(ob.name);
  //   data.update.setValue(ob.update);
  //   data.id.setValue(ob.id!);
  // }

  override getOb(): IncomeCategory {
    // const form = this.form.controls;
    // const ob: IncomeCategory = {
    //   id: form.id.value as number,
    //   active: form.active.value as number,
    //   name: form.name.value as string,
    //   update: form.update.value as Date,
    // };
    // return ob;
    return this.service.newInstance();
  }
}
