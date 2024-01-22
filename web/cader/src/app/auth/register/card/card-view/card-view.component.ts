import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumYesNo } from 'src/app/core/enuns/enumSimNao';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent extends SPage<Card, CardService> {
  constructor(
    private service: CardService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Cartão', service, factory, actRote);
  }

  override populatedForm(ob: Card) {
    console.log(this.formBuilder, ob);
    this.form = this.formBuilder.group({
      name: [ob.name, Validators.required],
      active: [ob.active],
    });
  }

  override getOb(): Card {
    const form = this.form?.value;
    const ob: Card = this.service.newInstance();
    Object.assign(ob, form);
    return ob;
  }

  liberar() {
    this.isDisabled.emmiter(false);
  }
}
