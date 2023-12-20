import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { BIParameterDefined } from 'src/app/model-bi/biparameterdefind';

@Component({
  selector: 'defined-parameter-view',
  templateUrl: './defined-parameter-view.component.html',
  styleUrls: ['./defined-parameter-view.component.scss'],
})
export class DefinedParameterViewComponent {
  @Input() list: Array<BIParameterDefined> = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });

  item?: BIParameterDefined;

  remove(item: BIParameterDefined) {}

  toForm(item: BIParameterDefined) {
    this.item = item;
    const form = this.form.controls;
    form.name.setValue(item.name);
    form.value.setValue(item.value);
  }

  toOb() {
    const form = this.form.controls;
    this.item!.name = form.name.value as string;
    this.item!.value = form.value.value as string;
  }

  toNew() {
    const item: BIParameterDefined = {
      name: '',
      value: '',
    };
    this.toForm(item);
  }

  save() {
    this.toOb();
    const isItem = this.list.find((f) => f == this.item);
    if (!isItem && this.item) {
      this.list.push(this.item);
    }
    this.toNew();
  }
}
