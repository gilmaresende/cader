import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    super('Categoria Despesa', controller, service, activatedRoute);
  }
}
