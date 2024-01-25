import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ObservableImpl<Type> {
  private usersSubject = new BehaviorSubject<Type[]>([]);
  dataOb$ = this.usersSubject.asObservable();

  constructor() {}

  update(data: Type[]) {
    this.usersSubject.next(data);
  }
}
