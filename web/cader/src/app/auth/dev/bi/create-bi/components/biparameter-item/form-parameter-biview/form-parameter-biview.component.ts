import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { DescriptionStr } from 'src/app/core/model/description-str';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { BiService } from 'src/app/services/bi.service';
import { FormParameterBIViewService } from './form-parameter-biview.service';

@Component({
  selector: 'form-parameter-biview',
  templateUrl: './form-parameter-biview.component.html',
  styleUrls: ['./form-parameter-biview.component.scss'],
})
export class FormParameterBIViewComponent implements OnInit {
  constructor(
    private service: BiService,
    private serviceForm: FormParameterBIViewService
  ) {
    serviceForm.setView(this);
  }
  @Input() item?: BIParameter;

  populateForm(item: BIParameter) {
    this.item = item;
    const form = this.form.controls;
    form.name.setValue(item.name);
    form.key.setValue(item.key);
    form.typeInput.setValue(item.typeInput);

    this.alterForm(item.typeInput);
  }

  typeInput = 1;
  showTypeDate = false;

  listTypes: Array<DescriptionStr> = [];
  listClass: Array<DescriptionStr> = [];
  listTypesOptionDate: Array<DescriptionId> = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    key: new FormControl('', Validators.required),
    typeInput: new FormControl(1),
    typePrimitive: new FormControl(),
    valueDefault: new FormControl(''),
    subTypeDate: new FormControl(),
    typeClass: new FormControl(),
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
    return this.item!;
  }

  ngOnInit(): void {
    this.findTypesParameter();
    this.findTypesRegister();
    this.getTypeOptionDate();
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

  alterForm(value: number) {
    const form = this.form.controls;
    form.typeInput.setValue(value);
    this.typeInput = value;
  }

  checkDate(select: DescriptionStr) {
    if (select.id == 'LOCAL_DATE') {
      this.showTypeDate = true;
    } else {
      this.showTypeDate = false;
    }
  }

  addNew() {
    const parametro: BIParameter = this.serviceForm.getNewParameter();
    this.populateForm(parametro);
  }

  addParametro() {
    const parametro = this.service.getOb();
    const item = parametro?.bIParameters.find((f) => f == this.item!);
    const newItem = this.getOb();
    if (!item) {
      parametro?.bIParameters.push(newItem);
    }
  }

  removeParameter() {
    const parametro = this.service.getOb();
    const item = parametro?.bIParameters.filter((f) => f == this.item);
    if (item) {
      const items = parametro?.bIParameters.filter((f) => f != this.item);
      parametro!.bIParameters = items!;
    }
  }
}
