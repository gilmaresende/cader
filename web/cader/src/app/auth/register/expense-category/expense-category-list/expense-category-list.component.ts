import { Component } from '@angular/core';
import { SPageList } from 'src/app/core/pages/spage/super-page-list';
import { PagesService } from 'src/app/core/services/pages.service';
import { ExpenseCategory } from 'src/app/model/expense-category';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';

@Component({
  selector: 'app-expense-category-list',
  templateUrl: './expense-category-list.component.html',
  styleUrls: ['./expense-category-list.component.scss'],
})
export class ExpenseCategoryListComponent extends SPageList<
  ExpenseCategory,
  ExpenseCategoryService
> {
  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Nome',
      percentage: 90,
    },
  ];
  atributos: Array<string> = ['name'];

  constructor(
    private controller: PagesService,
    private service: ExpenseCategoryService
  ) {
    super('Lista Categorias Despesa', controller, service);
  }
}
