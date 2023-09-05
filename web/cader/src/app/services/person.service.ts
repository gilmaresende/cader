import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends BaseHttpService<Person> {
  override rote: string = 'person';
}
