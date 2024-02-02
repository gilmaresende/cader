import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/components/prime/toast/toast.service';
import { removeOfList } from 'src/app/core/utils/List/UtilList';
import { BIParameterDefined } from 'src/app/model-bi/biparameterdefind';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

@Component({
  selector: 'defined-parameter-view',
  templateUrl: './defined-parameter-view.component.html',
  styleUrls: ['./defined-parameter-view.component.scss'],
})
export class DefinedParameterViewComponent implements OnInit, AfterViewInit {
  @Input() observableCustom?: ObservableImpl<BIParameterDefined>;

  @Input() isDisabled?: ObservableElement;

  item?: BIParameterDefined;
  list: Array<BIParameterDefined> = [];
  disabled = false;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });

  constructor(protected toastService: ToastService) {}

  ngOnInit(): void {
    this.observableCustom?.dataOb$.subscribe((data) => {
      this.list = data;
    });

    this.isDisabled?.observable$.subscribe((data) => {
      this.disabled = data;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isDisabled?.reload();
    });
  }

  remove(item: BIParameterDefined) {
    removeOfList(item, this.list);
  }

  toForm(item: BIParameterDefined) {
    this.item = item;
    const form = this.form.controls;
    form.name.setValue(item.name);
    form.value.setValue(item.value);
  }

  toOb(): BIParameterDefined {
    const form = this.form.controls;
    return {
      name: form.name.value as string,
      value: form.value.value as string,
    };
  }

  toNew() {
    this.item = undefined;
    const item: BIParameterDefined = {
      name: '',
      value: '',
    };
    this.toForm(item);
  }

  save() {
    const ob = this.toOb();
    const hasErro: Boolean = this.validSave(ob);
    if (hasErro) {
      return;
    }

    let itemCurrent;
    if (this.item) {
      itemCurrent = this.list.find((i) => i === this.item);
      if (itemCurrent) {
        itemCurrent.name = ob.name;
        itemCurrent.value = ob.value;
      } else {
        this.list.push(ob);
      }
    } else {
      this.list.push(ob);
    }
    this.toNew();
  }

  validSave(ob: BIParameterDefined): Boolean {
    let hasErro = false;
    if (!ob.name) {
      hasErro = true;
      this.toastService.showAlert('Informe Nome');
    }
    if (!ob.value) {
      hasErro = true;
      this.toastService.showAlert('Informe Valor');
    }
    return hasErro;
  }
}
