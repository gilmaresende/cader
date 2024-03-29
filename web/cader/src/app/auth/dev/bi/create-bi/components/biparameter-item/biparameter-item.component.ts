import { Component, Input, OnInit } from '@angular/core';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { FormParameterBIViewService } from './form-parameter-biview/form-parameter-biview.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptionStr } from 'src/app/core/model/description-str';
import { ConstBITypeDate, ConstBITypeInput } from 'src/app/data';
import {
  ConstBIPrimitiveOrEntity,
  ConstBITypeInputList,
} from 'src/app/data/ConstantsBI';
import { BIParameterDefined } from 'src/app/model-bi/biparameterdefind';
import { BiService } from 'src/app/services/bi.service';

@Component({
  selector: 'biparameterItem',
  templateUrl: './biparameter-item.component.html',
  styleUrls: ['./biparameter-item.component.scss'],
})
export class BIParameterItemComponent implements OnInit {
  @Input() observable?: ObservableImpl<BIParameter>;
  parameters?: Array<BIParameter> = [];
  constBITypeDate = ConstBITypeDate;

  //listas e contantes
  constTypeInputs = ConstBITypeInput;
  listTypes = ConstBITypeInputList;
  listClass: Array<DescriptionStr> = [];
  constPrimitiEntity = ConstBIPrimitiveOrEntity;

  //controle visual tela
  showComboDate = false;
  typeInputPrimitiveOrEntity = 1;
  showCustomizade = false;

  //elementos de dados
  item?: BIParameter;

  observableCustom?: ObservableImpl<BIParameterDefined> = new ObservableImpl();

  constructor(
    private serviceFormItem: FormParameterBIViewService,
    private service: BiService
  ) {}
  ngOnInit(): void {
    this.observable?.dataOb$.subscribe((listData) => {
      this.parameters = listData;
    });
    this.findTypesRegister();
    this.item = this.service.getNewParameter();
  }

  form = new FormGroup({
    name: new FormControl(''),
    key: new FormControl(''),
    typePrimitiveOrEntity: new FormControl(1),
    typePrimitive: new FormControl(this.constTypeInputs.INTEGER),
    valueDefault: new FormControl(''),
    subTypeDate: new FormControl(),
    typeClass: new FormControl(),
    customized: new FormControl(false),
  });

  getOb(): BIParameter {
    const form = this.form.controls;
    return {
      name: form.name.value as string,
      key: form.key.value as string,
      typePrimitiveOrEntity: form.typePrimitiveOrEntity.value as number,
      typePrimitive: form.typePrimitive.value as number,
      valueDefault: form.valueDefault.value as string,
      subTypeDate: form.subTypeDate.value,
      typeClass: form.typeClass.value as DescriptionStr,
      customized: form.customized.value as boolean,
      optionsDefined: this.item!.optionsDefined,
    };
  }

  populateForm(item: BIParameter) {
    this.item = item;
    const form = this.form.controls;
    form.name.setValue(item.name);
    form.key.setValue(item.key);
    form.typePrimitiveOrEntity.setValue(item.typePrimitiveOrEntity);
    form.customized.setValue(item.customized);
    form.typeClass.setValue(item.typeClass);
    form.typePrimitive.setValue(item.typePrimitive);
    form.valueDefault.setValue(item.valueDefault);
    form.subTypeDate.setValue(item.subTypeDate);

    // this.parameters = item.optionsDefined;
    //this.alterTypeImput(item.typeInput);
    // this.checkCustom(item.customized);

    // this.observableCustom?.update(item.optionsDefined);
  }

  findTypesRegister() {
    this.service.getTypesRegisters().subscribe({
      next: (res) => {
        this.listClass = res as Array<DescriptionStr>;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  changePrimitiveAndEntity(value: number) {
    this.typeInputPrimitiveOrEntity = value;
    if (value === this.constPrimitiEntity.PRIMITIVE) {
      const typePrimitive = this.form.controls.typePrimitive.value;
      this.changePrimitiveDate(typePrimitive!);
    }
  }

  changePrimitiveDate(typePrimitive: number) {
    if (typePrimitive == this.constTypeInputs.LOCAL_DATE) {
      this.showComboDate = true;
    } else {
      this.showComboDate = false;
    }
  }

  alterTypeImputOld(value: number) {
    this.typeInputPrimitiveOrEntity = value;
    const form = this.form.controls;
    const type = form.typePrimitive;
    if (type && type.value) {
      this.checkDate(type.value);
    }
  }

  checkDate(select: any) {
    if (select.id == 'LOCAL_DATE') {
      this.showComboDate = true;
    } else {
      this.showComboDate = false;
    }
    this.checkCustom(false);
  }

  checkCustom(value: boolean) {
    const form = this.form.controls;
    form.customized.setValue(value);
    this.showCustomizade = value;
  }

  save() {
    const ob = this.getOb();
    const hasErro: boolean = this.checkErros(ob);
    if (hasErro) {
      return;
    }

    if (this.item) {
      console.log(this.item);
      const parameterAux = this.parameters?.find((i) => i == this.item);
      if (parameterAux) {
        Object.assign(parameterAux, ob);
      } else {
        this.parameters?.push(ob);
      }
    } else {
      this.parameters?.push(ob);
    }
    this.item = this.service.getNewParameter();
  }

  removeParameter() {
    // const parametro = this.service.getOb();
    // const item = parametro?.bIParameters.filter((f) => f == this.item);
    // if (item) {
    //   const items = parametro?.bIParameters.filter((f) => f != this.item);
    //   parametro!.bIParameters = items!;
    // }
  }

  checkErros(ob: BIParameter): boolean {
    return false;
  }
}
