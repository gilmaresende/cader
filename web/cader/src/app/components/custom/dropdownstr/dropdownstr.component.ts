import {
  Component,
  Input,
  OnInit,
  DoCheck,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { DescriptionStr } from 'src/app/core/model/description-str';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

@Component({
  selector: 'dropdownstr',
  templateUrl: './dropdownstr.component.html',
  styleUrls: ['./dropdownstr.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DropdownstrComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DropdownstrComponent,
    },
  ],
})
export class DropdownstrComponent
  implements OnInit, DoCheck, ControlValueAccessor
{
  @Input() isDisabled?: ObservableElement;
  @Input() label: string | null = null;
  @Input() list: Array<DescriptionStr> = [];

  @Output() valueChanged = new EventEmitter<any>();
  @Input() observableList?: ObservableImpl<DescriptionStr>;

  selected?: DescriptionStr;

  touched = false;

  description = 'dev';
  disabled = false;

  ngOnInit() {
    this.markAsTouched();
    if (this.selected) {
      this.onChange(this.selected);
    }
    if (this.observableList) {
      this.observableList.dataOb$.subscribe((data) => {
        this.list = data;
      });
    }

    this.isDisabled?.observable$.subscribe((data) => {
      this.disabled = data;
    });
  }

  ngDoCheck(): void {
    this.markAsTouched();
    if (!this.isDisabled && this.selected) {
      this.description = this.selected.description;
      this.onChange(this.selected);
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  onChange = (ob: DescriptionStr) => {};

  onTouched = () => {};

  /////////////////////////////////////////////////////////////////////////////////////////////
  //implementação da interface
  /////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * O writeValuemétodo é chamado pelo módulo Angular
   * Forms sempre que o formulário pai
   * deseja definir um valor no controle filho.
   */
  writeValue(ob: DescriptionStr) {
    this.selected = ob;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    // this.isDisabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity,
        },
      };
    }
    return null;
  }

  change() {
    if (this.selected) {
      this.onChange(this.selected);
      this.onTouched();
      this.valueChanged.emit(this.selected);
    }
  }
}
