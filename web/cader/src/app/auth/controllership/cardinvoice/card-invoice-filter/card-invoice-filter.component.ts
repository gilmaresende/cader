import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SFilter } from 'src/app/core/pages/spage/super-filter';
import { ControlService } from 'src/app/core/services/control.service';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from 'src/app/core/utils/Date/date-util';
import { CardInvoiceFilter } from 'src/app/model-filter/card-invoice-filter';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'card-invoice-filter',
  templateUrl: './card-invoice-filter.component.html',
  styleUrls: ['./card-invoice-filter.component.scss'],
})
export class CardInvoiceFilterComponent extends SFilter<CardInvoiceFilter> {
  constructor(
    private controller: ControlService,
    public cardService: CardService
  ) {
    super(controller);
  }

  form = new FormGroup({
    dueDateStart: new FormControl(getFirstDayMonth()),
    dueDateEnd: new FormControl(getLastDayMonth()),
    closedDateStart: new FormControl(),
    closedDateEnd: new FormControl(),
    card: new FormControl(),
  });
  override getOb(): CardInvoiceFilter {
    const form = this.form.controls;
    return {
      dueDateStart: form.dueDateStart.value as Date,
      dueDateEnd: form.dueDateEnd.value as Date,
      closedDateStart: form.closedDateStart.value as Date,
      closedDateEnd: form.closedDateEnd.value as Date,
      card: form.card.value as DescriptionId,
    };
  }

  getDataOrUndefind(value: FormControl): Date | undefined {
    return value.value ? value.value : undefined;
  }

  showF() {
    const ob = this.getOb();
    console.log(ob);
  }
}
