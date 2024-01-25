import { Component } from '@angular/core';
import { SPageListFilter } from 'src/app/core/pages/spage/super-page-list-filter';
import { PagesService } from 'src/app/core/services/pages.service';
import { newCashInflowFilter } from 'src/app/model-filter/cash-inflow-filter';
import { CashInflow } from 'src/app/model/cash-inflow';
import { CashInflowService } from 'src/app/services/cash-inflow.service';

@Component({
  selector: 'app-cash-inflow-list',
  templateUrl: './cash-inflow-list.component.html',
  styleUrls: ['./cash-inflow-list.component.scss'],
})
export class CashInflowListComponent extends SPageListFilter<
  CashInflow,
  CashInflowService
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
    private service: CashInflowService
  ) {
    super('Lista Entradas', controller, service);
  }

  override getFilterBase() {
    return newCashInflowFilter();
  }
}
