import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss'],
})
export class PersonViewComponent extends SPage<Person, PersonService> {
  constructor(
    private action: ControlService,
    private service: PersonService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Pessoa', action, service, activatedRoute);
  }
}
