import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpensePayment } from 'src/app/model/expense-payment';

@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  private usersSubject = new BehaviorSubject<ExpensePayment[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor() {}

  updateUsers(users: ExpensePayment[]) {
    this.usersSubject.next(users);
  }
}
