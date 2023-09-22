import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.scss'],
})
export class ExpenseViewComponent extends SPage<Expense, ExpenseService> {
  override getOb(): Expense {
    throw new Error('Method not implemented.');
  }
  override populatedForm(ob: Expense) {
    throw new Error('Method not implemented.');
  }

  pages = ['Detalhes', 'Pagamentos'];

  constructor(
    private controller: ControlService,
    private service: ExpenseService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Despesa', controller, service, activatedRoute);
  }
}
