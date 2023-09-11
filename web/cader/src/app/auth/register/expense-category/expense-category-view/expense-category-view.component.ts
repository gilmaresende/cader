import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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
    private action: ControlService,
    private service: ExpenseCategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Categoria Despesa', action, service, activatedRoute);
  }
}
