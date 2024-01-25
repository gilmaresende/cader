import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
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
    this.form = this.formBuilder.group({
      name: [ob.name, Validators.required],
      active: [ob.active],
    });
  }

  override getOb(): Card {
    const form = this.form?.value;
    return form;
  }
}
