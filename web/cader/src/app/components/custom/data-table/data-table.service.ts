import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpensePayment } from 'src/app/model/expense-payment';

// @Injectable({
//   providedIn: 'root',
// })
export class DataTableService<Type> {
  private usersSubject = new BehaviorSubject<Type[]>([]);
  dataOb$ = this.usersSubject.asObservable();

  constructor() {}

  update(data: Type[]) {
    this.usersSubject.next(data);
  }
}
