import { Component, Input, DoCheck } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'inputDate',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputDateComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputDateComponent,
    },
  ],
})
export class InputDateComponent implements ControlValueAccessor, DoCheck {
  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() placeholder: string = '';

  value?: Date;

  touched = false;

  disabled = false;

  ngDoCheck(): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(this.value!);
    }
  }
  teclar() {}

  clean() {
    this.onChange(undefined);
    this.value = undefined;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////
  //que funções são essas?
  /////////////////////////////////////////////////////////////////////////////////////////////

  onChange = (quantity: Date | undefined) => {};

  onTouched = () => {};

  /////////////////////////////////////////////////////////////////////////////////////////////
  //implementação da interface
  /////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * O writeValuemétodo é chamado pelo módulo Angular
   * Forms sempre que o formulário pai
   * deseja definir um valor no controle filho.
   */
  writeValue(value: Date | undefined) {
    if (value) this.value = new Date(value);
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
}
