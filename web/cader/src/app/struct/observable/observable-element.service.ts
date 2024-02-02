import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ObservableElement {
  constructor() {}

  data: any;

  private observableSubject = new Subject<any>();
  observable$ = this.observableSubject.asObservable();

  emmiter(data: any) {
    this.data = data;
    this.observableSubject.next(data);
  }

  reload() {
    this.emmiter(this.data);
  }
}
