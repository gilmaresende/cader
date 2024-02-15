import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { LoteOfExpenses } from 'src/app/model/lot-of-expenses';
import { LotOfExpensesService } from 'src/app/services/lot-of-expenses.service';

@Component({
  selector: 'app-lote-of-expense-view',
  templateUrl: './lote-of-expense-view.component.html',
  styleUrls: ['./lote-of-expense-view.component.scss'],
})
export class LoteOfExpenseViewComponent extends SPage<
  LoteOfExpenses,
  LotOfExpensesService
> {
  constructor(
    private service: LotOfExpensesService,
    private factoryService: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Lote Despesas', service, factoryService, actRote);
  }

  override populatedForm(ob: LoteOfExpenses) {
    this.form = this.formBuilder.group({
      description: [ob.description, Validators.required],
      firstDue: [ob.firstDue, Validators.required],
      lastDue: [ob.lastDue],
      category: [ob.category, Validators.required],
      paymentType: [ob.paymentType, Validators.required],
      wallet: [ob.wallet, Validators.required],
      person: [ob.person, Validators.required],
      valueBase: [ob.valueBase, Validators.required],
      amount: [ob.amount, Validators.required],
    });
  }
  override getOb(): LoteOfExpenses {
    const ob = this.form?.value;
    return ob;
  }
}
