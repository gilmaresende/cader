import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss'],
})
export class PersonViewComponent extends SPage<Person, PersonService> {
  constructor(
    private service: PersonService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Pessoa', service, factory, actRote);
  }

  override populatedForm(ob: Person) {
    this.form = this.formBuilder.group({
      name: [ob.name, Validators.required],
      active: [ob.active],
    });
  }

  override getOb(): Person {
    const form = this.form?.value;
    return form;
  }
}
