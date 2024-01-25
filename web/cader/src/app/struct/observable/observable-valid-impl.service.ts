import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ObservableValid {
  constructor() {}

  private observableSubject = new Subject<Array<string>>();
  observable$ = this.observableSubject.asObservable();

  emmiter(data: Array<string>) {
    this.observableSubject.next(data);
  }
}
