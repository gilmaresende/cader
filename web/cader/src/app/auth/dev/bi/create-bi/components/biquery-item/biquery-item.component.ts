import { Input, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { BIQuery } from 'src/app/model-bi/biquery';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BiService } from 'src/app/services/bi.service';

@Component({
  selector: 'biquery-item',
  templateUrl: './biquery-item.component.html',
  styleUrls: ['./biquery-item.component.scss'],
})
export class BIQueryItemComponent implements OnInit {
  @Input() query?: BIQuery;
  item?: BIQuery;
  items: Array<any> = [];

  faCoffee = faCoffee;

  constructor(private serviceBi: BiService) {}

  ngOnInit(): void {
    if (this.query) this.items.push(this.query);
  }

  toForm(item: any) {
    this.popularForm(item);
  }

  cleanView() {}

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    query: new FormControl('', Validators.required),
  });

  popularForm(item: BIQuery) {
    this.item = item;
    const form = this.form.controls;
    form.name.setValue(item.label);
    form.query.setValue(item.data);
  }

  toOb() {
    const form = this.form.controls;
    this.item!.data = form.query.value as string;
    this.item!.label = form.name.value as string;
    this.clean();
  }

  clean() {
    this.item = undefined;
    const form = this.form.controls;
    form.name.setValue('');
    form.query.setValue('');
  }

  newChildreen() {
    const newItem: BIQuery = this.serviceBi.newQuery();
    this.item?.children.push(newItem);
  }
  delete() {
    if (this.query) {
      this.remove(this.query);
    }
  }

  remove(item: BIQuery) {
    if (this.item) {
      var indiceParaRemover = item.children.indexOf(this.item);
      if (indiceParaRemover !== -1) {
        if (indiceParaRemover !== undefined) {
          item.children.splice(indiceParaRemover, 1);
          return true;
        }
      } else {
        for (let it of item.children) {
          const removed = this.remove(it);
          if (removed) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
