import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
import {
  getFirstDayMonth,
  getFirstDayMonthYYYYMMDD,
  getLastDayMonth,
  getLastDayMonthYYYYMMDD,
} from 'src/app/core/utils/Date/date-util';
import { CashInflowFilter } from 'src/app/model-filter/cash-inflow-filter';
import { IncomeCategoryService } from 'src/app/services/income-category.service';
import { PaymentTypeService } from 'src/app/services/payment-type.service';
import { PersonService } from 'src/app/services/person.service';
import { WalletService } from 'src/app/services/wallet.service';
import {
  EnumCashInflowOriginFilter,
  EnumCashInflowStatusFilter,
} from 'src/data/combos-enum';

@Component({
  selector: 'cash-inflow-filter',
  templateUrl: './cash-inflow-filter.component.html',
  styleUrls: ['./cash-inflow-filter.component.scss'],
})
export class CashInflowFilterComponent extends SFilter<CashInflowFilter> {
  constructor(
    private controller: ControlService,
    public serviceWallet: WalletService,
    public servicePaymentTypeService: PaymentTypeService,
    public servicePerson: PersonService,
    public serviceIncomeCategory: IncomeCategoryService
  ) {
    super(controller);
  }

  statusList: Array<DescriptionId> = EnumCashInflowStatusFilter;

  originList: Array<DescriptionId> = EnumCashInflowOriginFilter;

  form = new FormGroup({
    dueDateStart: new FormControl(getFirstDayMonthYYYYMMDD()),
    dueDateEnd: new FormControl(getLastDayMonthYYYYMMDD()),
    status: new FormControl(),
    wallet: new FormControl(),
    paymentType: new FormControl(),
    person: new FormControl(),
    incomeCategory: new FormControl(),
    origin: new FormControl(),
  });

  override getOb(): CashInflowFilter {
    const form = this.form.controls;
    const ob = {
      dueDateStart: form.dueDateStart.value,
      dueDateEnd: form.dueDateEnd.value,
      status: form.status.value as DescriptionId,
      wallet: form.wallet.value as DescriptionId,
      paymentType: form.paymentType.value as DescriptionId,
      person: form.person.value as DescriptionId,
      origin: form.origin.value as DescriptionId,
      incomeCategory: form.incomeCategory.value as DescriptionId,
    };
    return ob;
  }
}
