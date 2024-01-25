import { Input, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { BIQuery } from 'src/app/model-bi/biquery';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ObservableTreeService } from 'src/app/components/custom/tree/observable-tree.service';
import { BiService } from 'src/app/services/bi.service';

@Component({
  selector: 'biquery-item',
  templateUrl: './biquery-item.component.html',
  styleUrls: ['./biquery-item.component.scss'],
})
export class BIQueryItemComponent implements OnInit {
  item?: BIQuery;
  items: Array<any> = [];
  queryMain?: BIQuery;

  @Input() queryOb?: ObservableTreeService<BIQuery>;

  constructor(private serviceBi: BiService) {}

  ngOnInit(): void {
    this.queryOb?.dataOb$.subscribe((listData) => {
      this.items = listData;
      this.queryMain = listData[0];
    });
  }

  toForm(item: any) {
    this.popularForm(item);
  }

  cleanView() {}

  form = new FormGroup({
    id: new FormControl(''),
    label: new FormControl('', Validators.required),
    query: new FormControl('', Validators.required),
  });

  popularForm(item: BIQuery) {
    this.item = item;
    const form = this.form.controls;
    form.label.setValue(item.label);
    form.query.setValue(item.data);
  }

  toOb() {
    const form = this.form.controls;
    this.item!.data = form.query.value as string;
    this.item!.label = form.label.value as string;
    this.clean();
  }

  clean() {
    this.item = undefined;
    const form = this.form.controls;
    form.label.setValue('');
    form.query.setValue('');
  }

  newChildreen() {
    const newItem: BIQuery = this.serviceBi.newQuery();
    this.item?.children.push(newItem);
  }
  delete() {
    if (this.queryMain) {
      this.remove(this.queryMain);
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
