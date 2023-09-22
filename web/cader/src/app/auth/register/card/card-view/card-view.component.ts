import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumYesNo } from 'src/app/core/enuns/enumSimNao';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent extends SPage<Card, CardService> {
  constructor(
    private controller: ControlService,
    private service: CardService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Cartão', controller, service, activatedRoute);
  }

  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    active: new FormControl(EnumYesNo.YES),
    update: new FormControl(new Date()),
  });

  override populatedForm(ob: Card) {
    const data = this.form.controls;
    data.active.setValue(ob.active);
    data.name.setValue(ob.name);
    data.update.setValue(ob.update);
    data.id.setValue(ob.id!);
  }

  override getOb(): Card {
    const form = this.form.controls;
    const ob: Card = {
      id: form.id.value as number,
      active: form.active.value as number,
      name: form.name.value as string,
      update: form.update.value as Date,
    };
    return ob;
  }
}
