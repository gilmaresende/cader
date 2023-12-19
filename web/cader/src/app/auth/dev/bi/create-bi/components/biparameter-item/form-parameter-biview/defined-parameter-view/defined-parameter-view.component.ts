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

  remove(item: BIParameterDefined) {}

  toForm(item: BIParameterDefined) {
    const form = this.form.controls;
    form.name.setValue(item.name);
    form.value.setValue(item.value);
  }
}
