import { Component } from '@angular/core';
import { BIItemParametroViewService } from '../biitem-parametro-view.service';
import { BIQuery } from 'src/app/model-bi/biquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'biitem-parametro-view',
  templateUrl: './biitem-parametro-view.component.html',
  styleUrls: ['./biitem-parametro-view.component.scss'],
})
export class BIItemParametroViewComponent {
  constructor(private service: BIItemParametroViewService) {
    service.setView(this);
  }

  item?: BIQuery;

  popularForm(item: BIQuery) {
    this.item = item;
    const form = this.form.controls;
    form.id.setValue(item.id);
    form.name.setValue(item.name);
    form.query.setValue(item.query);
  }

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    query: new FormControl('', Validators.required),
  });

  save() {
    const form = this.form.controls;
    this.item!.query = form.query.value as string;
    this.item!.name = form.name.value as string;
  }

  delete() {
    this.service.remove(this.item!);
  }

  newSub() {
    this.item?.queriesChildren.push({
      id: '0',
      name: 'dev',
      query: '',
      queriesChildren: [],
    });
    console.log(this.item);
  }
}
