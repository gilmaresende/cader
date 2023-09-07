import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { Person } from '../model/person';
import { EnumYesNo } from '../core/enuns/enumSimNao';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends BaseHttpService<Person> {
  override newInstance(): Person {
    return { name: '', id: 0, active: EnumYesNo.YES };
  }
  override rote: string = 'person';
}
