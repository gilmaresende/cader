import { Component, Input, OnInit } from '@angular/core';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { FormParameterBIViewService } from './form-parameter-biview/form-parameter-biview.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

@Component({
  selector: 'biparameterItem',
  templateUrl: './biparameter-item.component.html',
  styleUrls: ['./biparameter-item.component.scss'],
})
export class BIParameterItemComponent implements OnInit {
  @Input() observable?: ObservableImpl<BIParameter>;
  parameters?: Array<BIParameter> = [];
  constructor(private serviceFormItem: FormParameterBIViewService) {}
  ngOnInit(): void {
    this.observable?.dataOb$.subscribe((listData) => {
      this.parameters = listData;
    });
  }

  itemToView(item: BIParameter) {
    this.serviceFormItem.setItem(item);
  }
}
