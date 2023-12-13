import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

    this.typeInput = item.typeInput;
  }

  typeInput = 1;

  listTypes: Array<DescriptionStr> = [];
  listClass: Array<DescriptionStr> = [];

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    default: new FormControl('', Validators.required),
    key: new FormControl('', Validators.required),
    type: new FormControl(),
    typeInput: new FormControl(1),
    clasS: new FormControl(),
  });

  addParametro() {
    const parametro = this.getOb();
    console.log(parametro);
  }

  getOb() {
    const form = this.form.controls;
    return {
      name: form.name.value,
      default: form.default.value,
      key: form.key.value,
      typeInput: form.typeInput.value,
      type: form.type.value,
      clasS: form.clasS.value,
    };
  }

  ngOnInit(): void {
    this.findTypesParameter();
    this.findTypesRegister();
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
}
