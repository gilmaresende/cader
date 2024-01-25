import { Component } from '@angular/core';
import { SPageList } from 'src/app/core/pages/spage/super-page-list';
import { PagesService } from 'src/app/core/services/pages.service';
import { IncomeCategory } from 'src/app/model/income-category';
import { IncomeCategoryService } from 'src/app/services/income-category.service';

@Component({
  selector: 'app-income-category-list',
  templateUrl: './income-category-list.component.html',
  styleUrls: ['./income-category-list.component.scss'],
})
export class IncomeCategoryListComponent extends SPageList<
  IncomeCategory,
  IncomeCategoryService
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
    private service: IncomeCategoryService
  ) {
    super('Lista Categorias Receita', controller, service);
  }
}
