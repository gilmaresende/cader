import { Injectable } from '@angular/core';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { FormParameterBIViewComponent } from './form-parameter-biview.component';

@Injectable({
  providedIn: 'root',
})
export class FormParameterBIViewService {
  view?: FormParameterBIViewComponent;

  constructor() {}

  setView(view: FormParameterBIViewComponent) {
    this.view = view;
  }

  setItem(item: BIParameter) {
    //if (this.view) this.view.populateForm(item);
  }
}
