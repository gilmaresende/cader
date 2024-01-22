import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumYesNo } from 'src/app/core/enuns/enumSimNao';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
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
    const data = this.form.controls;
    // data.active.setValue(ob.active);
    // data.name.setValue(ob.name);
    // data.update.setValue(ob.update);
    // data.id.setValue(ob.id!);
  }

  override getOb(): Person {
    // const form = this.form.controls;
    // const ob: Person = {
    //   id: form.id.value as number,
    //   active: form.active.value as number,
    //   name: form.name.value as string,
    //   update: form.update.value as Date,
    // };
    return this.service.newInstance();
  }
}
