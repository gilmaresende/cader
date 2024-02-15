import { Component } from '@angular/core';
import { SPageListFilter } from 'src/app/core/pages/spage/super-page-list-filter';
import { PagesService } from 'src/app/core/services/pages.service';
import { LotOfExpenses } from 'src/app/model/lot-of-expenses';
import { LotOfExpensesService } from 'src/app/services/lot-of-expenses.service';

@Component({
  selector: 'app-lote-of-expense-list',
  templateUrl: './lote-of-expense-list.component.html',
  styleUrls: ['./lote-of-expense-list.component.scss'],
})
export class LoteOfExpenseListComponent extends SPageListFilter<
  LotOfExpenses,
  LotOfExpensesService
> {
  constructor(
    private controller: PagesService,
    private service: LotOfExpensesService
  ) {
    super('Lista Lote Despesas', controller, service);
  }

  override getFilterBase() {
    return {};
  }

  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Descrição',
      percentage: 50,
    },
    {
      description: 'Pessoa',
      percentage: 25,
    },
    {
      description: 'Valor',
      percentage: 15,
    },
  ];
  atributos: Array<string> = ['description', 'person', 'valueBase'];
}
