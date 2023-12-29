import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { DescriptionStr } from 'src/app/core/model/description-str';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { BIParameterDefined } from 'src/app/model-bi/biparameterdefind';
import { BiService } from 'src/app/services/bi.service';
import { FormParameterBIViewService } from './form-parameter-biview.service';
import { BI } from 'src/app/model-bi/bi';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

@Component({
  selector: 'form-parameter-biview',
  templateUrl: './form-parameter-biview.component.html',
  styleUrls: ['./form-parameter-biview.component.scss'],
})
export class FormParameterBIViewComponent implements OnInit {
  @Input() item?: BIParameter;
  @Input() bi?: BI;
  @Input() observable?: ObservableImpl<BIParameter>;

  constructor(
    private service: BiService,
    private serviceForm: FormParameterBIViewService
  ) {
    serviceForm.setView(this);
  }

  ngOnInit(): void {
    this.findTypesParameter();
    this.findTypesRegister();
    this.getTypeOptionDate();
  }

  populateForm(item: BIParameter) {
    this.item = item;
    const form = this.form.controls;
    form.name.setValue(item.name);
    form.key.setValue(item.key);
    form.typeInput.setValue(item.typeInput);
    form.customized.setValue(item.customized);
    form.typeClass.setValue(item.typeClass);
    form.typePrimitive.setValue(item.typePrimitive);

    this.parameters = item.optionsDefined;
    this.alterTypeImput(item.typeInput);
    this.checkCustom(item.customized);
  }

  typeInput = 1;
  showTypeDate = false;
  showCustomizade = false;

  listTypes: Array<DescriptionStr> = [];
  listClass: Array<DescriptionStr> = [];
  listTypesOptionDate: Array<DescriptionId> = [];
  parameters: Array<BIParameterDefined> = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    key: new FormControl('', Validators.required),
    typeInput: new FormControl(1),
    typePrimitive: new FormControl(),
    valueDefault: new FormControl(''),
    subTypeDate: new FormControl(),
    typeClass: new FormControl(),
    customized: new FormControl(false),
  });

  getOb(): BIParameter {
    const form = this.form.controls;
    this.item!.name = form.name.value as string;
    this.item!.key = form.key.value as string;
    this.item!.typeInput = form.typeInput.value as number;
    this.item!.typePrimitive = form.typePrimitive.value as DescriptionStr;
    this.item!.valueDefault = form.valueDefault.value as string;
    this.item!.subTypeDate = form.subTypeDate.value as DescriptionId;
    this.item!.typeClass = form.typeClass.value as DescriptionStr;
    this.item!.customized = form.customized.value as boolean;

    return this.item!;
  }

  findTypesParameter() {
    this.service.getTypesEnum().subscribe({
      next: (res) => {
        this.listTypes = res as Array<DescriptionStr>;
      },
      error: (error) => {
        //  this.toastService.catchErro(error);
        // this.controller.loading.dropLoading();
      },
    });
  }

  getTypeOptionDate() {
    this.service.getTypeOptionDate().subscribe({
      next: (res) => {
        this.listTypesOptionDate = res as Array<DescriptionId>;
      },
      error: (error) => {
        //  this.toastService.catchErro(error);
        // this.controller.loading.dropLoading();
      },
    });
  }

  findTypesRegister() {
    this.service.getTypesRegisters().subscribe({
      next: (res) => {
        this.listClass = res as Array<DescriptionStr>;
      },
      error: (error) => {
        //  this.toastService.catchErro(error);
        // this.controller.loading.dropLoading();
      },
    });
  }

  addNew() {
    if (!this.bi?.bIParameters) {
      this.bi!.bIParameters = [];
    }
    const parametro: BIParameter = this.service.getNewParameter();
    this.bi?.bIParameters.push(parametro);
    this.observable?.update(this.bi?.bIParameters!);
    this.item = undefined;
  }

  save() {
    this.getOb();
    this.item = undefined;
  }

  removeParameter() {
    const parametro = this.service.getOb();
    const item = parametro?.bIParameters.filter((f) => f == this.item);
    if (item) {
      const items = parametro?.bIParameters.filter((f) => f != this.item);
      parametro!.bIParameters = items!;
    }
  }

  alterTypeImput(value: number) {
    const form = this.form.controls;
    this.typeInput = value;
    const type = form.typePrimitive;
    if (type && type.value) {
      this.checkDate(type.value);
    }
  }

  checkDate(select: DescriptionStr) {
    if (select.id == 'LOCAL_DATE') {
      this.showTypeDate = true;
    } else {
      this.showTypeDate = false;
    }
    this.checkCustom(false);
  }

  checkCustom(value: boolean) {
    const form = this.form.controls;
    form.customized.setValue(value);
    this.showCustomizade = value;
  }
}
