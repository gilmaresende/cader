import { Component, Input } from '@angular/core';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { FormParameterBIViewService } from './form-parameter-biview/form-parameter-biview.service';

@Component({
  selector: 'biparameterItem',
  templateUrl: './biparameter-item.component.html',
  styleUrls: ['./biparameter-item.component.scss'],
})
export class BIParameterItemComponent {
  constructor(private serviceFormItem: FormParameterBIViewService) {}

  @Input() parameters?: Array<BIParameter> = [];

  itemToView(item: BIParameter) {
    this.serviceFormItem.setItem(item);
  }
}
