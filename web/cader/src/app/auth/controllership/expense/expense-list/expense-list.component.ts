import { Component } from '@angular/core';
import { SPageListFilter } from 'src/app/core/pages/spage/super-page-list-filter';
import { PagesService } from 'src/app/core/services/pages.service';
import { newExpsenseFilter } from 'src/app/model-filter/expense-filter';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent extends SPageListFilter<
  Expense,
  ExpenseService
> {
  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Descrição',
      percentage: 30,
    },
    {
      description: 'Pessoa',
      percentage: 20,
    },
    {
      description: 'Data Vencimento',
      percentage: 15,
    },
    {
      description: 'Valor',
      percentage: 15,
    },
    {
      description: 'Valor Aberto',
      percentage: 15,
    },
  ];
  atributos: Array<string> = [
    'description',
    'person',
    'dueDate',
    'value',
    'openValue',
  ];

  constructor(
    private controller: PagesService,
    private service: ExpenseService
  ) {
    super('Lista Despesas', controller, service);
  }

  override getFilterBase() {
    return newExpsenseFilter();
  }
}
