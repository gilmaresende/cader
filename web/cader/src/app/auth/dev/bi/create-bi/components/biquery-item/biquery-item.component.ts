import { Input } from '@angular/core';

import { Component } from '@angular/core';
import { BIQuery } from 'src/app/model-bi/biquery';
import { BIItemParametroViewService } from './biitem-parametro-view.service';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'biquery-item',
  templateUrl: './biquery-item.component.html',
  styleUrls: ['./biquery-item.component.scss'],
})
export class BIQueryItemComponent {
  @Input() query?: BIQuery;

  faCoffee = faCoffee;

  constructor(private service: BIItemParametroViewService) {}

  setItem() {
    this.service.setItem(this.query!);
  }

  addNew() {
    const newItem: BIQuery = {
      id: '',
      name: 'new',
      query: 'new select',
      queriesChildren: [],
      dad: this.query,
    };
    this.query?.queriesChildren.push(newItem);
    this.service.setItem(newItem);
  }

  cleanView() {
    this.service.setItem({ id: '', name: '', queriesChildren: [], query: '' });
  }
}
