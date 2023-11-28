import { Component } from '@angular/core';
import { SPageListFilter } from 'src/app/core/pages/spage/super-page-list-filter';
import { ControlService } from 'src/app/core/services/control.service';
import { newCardInvoiceFilter } from 'src/app/model-filter/card-invoice-filter';
import { CardInvoice } from 'src/app/model/card-invoice';
import { CardInvoiceService } from 'src/app/services/card-invoice.service';

@Component({
  selector: 'card-invoice-list',
  templateUrl: './card-invoice-list.component.html',
  styleUrls: ['./card-invoice-list.component.scss'],
})
export class CardInvoiceListComponent extends SPageListFilter<
  CardInvoice,
  CardInvoiceService
> {
  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Cartão',
      percentage: 45,
    },
    {
      description: 'Vencimento',
      percentage: 25,
    },
    {
      description: 'Valor',
      percentage: 25,
    },
  ];
  atributos: Array<string> = ['card', 'dueDate', 'value'];

  constructor(
    private controller: ControlService,
    private service: CardInvoiceService
  ) {
    super('Lista Faturas', controller, service);
  }

  override getFilterBase() {
    return newCardInvoiceFilter();
  }
}
