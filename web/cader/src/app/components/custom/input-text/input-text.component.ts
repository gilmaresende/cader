import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'inputText',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputTextComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputTextComponent,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() customValidators: ((value: any) => ValidationErrors | null)[] = [];

  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() placeholder: string = '';

  hasError: boolean = false;
  errorMessage: string = '';
  isTooltipVisible: boolean = false;

  value = '';

  touched = false;

  disabled = false;

  teclar() {
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(this.value);
    }
  }

  externalControl: AbstractControl | null = null;

  // Este método será chamado pelo FormControl externo
  setFormControl(externalControl: AbstractControl | null) {
    this.externalControl = externalControl;
  }

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
    // Execute os validadores personalizados
    for (const validatorFn of this.customValidators) {
      const result = validatorFn(this.value);

      if (result) {
        this.hasError = true;
        console.log(result); //result.message
        this.errorMessage = 'Campo inválido';
        return result;
      }
    }

    this.hasError = false;
    this.errorMessage = '';
    return null;
  }
}
