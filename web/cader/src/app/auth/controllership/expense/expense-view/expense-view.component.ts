import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { Expense } from 'src/app/model/expense';
import { ExpensePayment } from 'src/app/model/expense-payment';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.scss'],
})
export class ExpenseViewComponent extends SPage<Expense, ExpenseService> {
  pages = ['Detalhes', 'Pagamentos'];

  constructor(
    private service: ExpenseService,
    private factoryService: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Despesa', service, factoryService, actRote);
  }
  dataTableServicePaymentys!: DataTableService<ExpensePayment>;
  listPayments!: ExpensePayment[];

  override instanceList(): void {
    this.dataTableServicePaymentys = new DataTableService<ExpensePayment>();
    this.listPayments = [];
  }

  override getOb(): Expense {
    const ob = this.form?.value;
    return ob;
  }

  override populatedForm(ob: Expense) {
    console.log('??', ob);

    this.form = this.formBuilder.group({
      description: [ob.description, Validators.required],
      dueDate: [ob.dueDate, Validators.required],
      value: [ob.value, Validators.required],
      amountPaid: [ob.amountPaid],
      openValue: [ob.openValue],
      wallet: [ob.wallet],
      expenseCategory: [ob.expenseCategory],
      paymentType: [ob.paymentType],
      person: [ob.person],
    });
    this.dataTableServicePaymentys.update(ob.payments as ExpensePayment[]);
  }
}
