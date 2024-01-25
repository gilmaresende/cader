import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CheckComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CheckComponent,
    },
  ],
})
export class CheckComponent implements ControlValueAccessor {
  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() id: string | null = null;
  value = '';

  @Output() valueChanged = new EventEmitter<any>();

  touched = false;

  disabled = false;

  /////////////////////////////////////////////////////////////////////////////////////////////
  //que funções são essas?
  /////////////////////////////////////////////////////////////////////////////////////////////

  onChange = (quantity: string) => {};

  onTouched = () => {};

  /////////////////////////////////////////////////////////////////////////////////////////////
  //implementação da interface
  /////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * O writeValuemétodo é chamado pelo módulo Angular
   * Forms sempre que o formulário pai
   * deseja definir um valor no controle filho.
   */
  writeValue(value: string) {
    this.value = value;
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
    this.disabled = disabled;
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
    this.onChange(this.value);
    this.onTouched();
    this.valueChanged.emit(this.value);
  }
}
