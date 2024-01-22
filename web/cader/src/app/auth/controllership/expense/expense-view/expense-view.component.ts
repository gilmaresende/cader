import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataTableService } from 'src/app/components/custom/data-table/data-table.service';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { PagesService } from 'src/app/core/services/pages.service';
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
  dataTableServicePaymentys: DataTableService<ExpensePayment> =
    new DataTableService<ExpensePayment>();
  listPayments: ExpensePayment[] = [];
  // form = new FormGroup({
  //   id: new FormControl(0),
  //   update: new FormControl(new Date()),
  //   description: new FormControl('', Validators.required),
  //   dueDate: new FormControl(new Date()),
  //   value: new FormControl(0),
  //   openValue: new FormControl(0),
  //   amountPaid: new FormControl(0),
  //   expenseCategory: new FormControl(),
  //   paymentType: new FormControl(),
  //   wallet: new FormControl(),
  //   person: new FormControl(),
  // });

  override getOb(): Expense {
    // const form = this.form.controls;
    // const ob: Expense = {
    //   id: form.id.value as number,
    //   update: form.update.value as Date,
    //   description: form.description.value as string,
    //   dueDate: form.dueDate.value as Date,
    //   value: form.value.value as number,
    //   expenseCategory: form.expenseCategory.value as DescriptionId,
    //   paymentType: form.paymentType.value as DescriptionId,
    //   wallet: form.wallet.value as DescriptionId,
    //   person: form.person.value as DescriptionId,
    // };
    // return ob;
    return this.service.newInstance();
  }

  override populatedForm(ob: Expense) {
    const data = this.form.controls;
    // data.id.setValue(ob.id!);
    // data.update.setValue(ob.update);
    // data.description.setValue(ob.description);
    // data.dueDate.setValue(ob.dueDate);
    // data.value.setValue(ob.value);
    // data.amountPaid.setValue(ob.amountPaid as number);
    // data.openValue.setValue(ob.openValue as number);
    // data.wallet.setValue(ob.wallet);
    // data.expenseCategory.setValue(ob.expenseCategory);
    // data.paymentType.setValue(ob.paymentType);
    // data.person.setValue(ob.person);
    // this.listPayments = ob.payments as ExpensePayment[];

    this.dataTableServicePaymentys.update(this.listPayments);
  }
}
