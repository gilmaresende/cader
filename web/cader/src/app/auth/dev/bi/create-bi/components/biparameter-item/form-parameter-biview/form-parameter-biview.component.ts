import { Component, Input, OnInit } from '@angular/core';
import { DescriptionStr } from 'src/app/core/model/description-str';
import { BIData } from 'src/app/model-bi/bidata';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { BIParameterDefined } from 'src/app/model-bi/biparameterdefind';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';
import { ObservableValid } from 'src/app/struct/observable/observable-valid-impl.service';
import { FormParameterBIViewService } from './form-parameter-biview.service';

@Component({
  selector: 'form-parameter-biview',
  templateUrl: './form-parameter-biview.component.html',
  styleUrls: ['./form-parameter-biview.component.scss'],
})
export class FormParameterBIViewComponent implements OnInit {
  @Input() item?: BIParameter;
  @Input() bi?: BIData;
  @Input() observable?: ObservableImpl<BIParameter>;

  constructor() {}

  ngOnInit(): void {}

  cleanScreen() {
    //  const item = this.service.getNewParameter();
    // this.populateForm(item);
  }

  listTypes: Array<DescriptionStr> = [];
  parameters: Array<BIParameterDefined> = [];

  validName: ObservableValid = new ObservableValid();
  validKey: ObservableValid = new ObservableValid();
  validValueDefault: ObservableValid = new ObservableValid();

  checkCustomized() {}

  // validation(): boolean {
  //   const form = this.form.controls;
  //   let hasErro = false;
  //   if (!hasContent(form.name.value)) {
  //     hasErro = true;
  //     this.validName.emmiter(['Nome é Obrigatório']);
  //   }
  //   if (!hasContent(form.key.value)) {
  //     hasErro = true;
  //     this.validKey.emmiter(['Key é Obrigatório']);
  //   }
  //   if (form.typePrimitive.value.id !== 'LOCAL_DATE') {
  //     if (!hasContent(form.valueDefault.value)) {
  //       this.validValueDefault.emmiter(['Valor Padrão é Obrigatório']);
  //     }
  //   }

  //   return hasErro;
  // }
}
