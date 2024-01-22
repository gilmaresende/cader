import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ObservableElement {
  constructor() {}

  private observableSubject = new Subject<any>();
  observable$ = this.observableSubject.asObservable();

  emmiter(data: any) {
    this.observableSubject.next(data);
  }
}
