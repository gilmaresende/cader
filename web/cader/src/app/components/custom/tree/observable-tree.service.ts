import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class ObservableTreeService<Type> {
  private usersSubject = new BehaviorSubject<Type[]>([]);
  dataOb$ = this.usersSubject.asObservable();

  constructor() {}

  update(data: Type[]) {
    this.usersSubject.next(data);
  }
}
