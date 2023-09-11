import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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
  constructor(
    private controller: ControlService,
    private service: IncomeCategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Categoria Receita', controller, service, activatedRoute);
  }
}
