import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lot-of-expense-base',
  templateUrl: './lot-of-expense-base.component.html',
  styleUrls: ['./lot-of-expense-base.component.scss'],
})
export class LotOfExpenseBaseComponent {
  form = new FormGroup({
    firstDue: new FormControl(),
    valueBase: new FormControl(),
    amount: new FormControl(),
  });
}
