import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'inputReais',
  templateUrl: './input-reais.component.html',
  styleUrls: ['./input-reais.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputReaisComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputReaisComponent,
    },
  ],
})
export class InputReaisComponent implements ControlValueAccessor {
  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() placeholder: string = '';

  value = '';

  touched = false;

  disabled = false;

  teclar() {
    this.markAsTouched();
    if (!this.disabled) {
      this.value = this.formatarMoeda(this.value);
      this.onChange(this.value);
    }
  }

  formatarMoeda(valor: any) {
    if (valor - parseFloat(valor) >= 0) {
      console.log('num');
    } else {
      valor = valor.replace(/\D/g, '');
    }
    let numero = parseFloat(valor) / 100; // Converte para um número e divide por 100 (assumindo que os centavos estão na parte decimal)
    const value = numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return value;
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
  writeValue(value: number) {
    value = value * 100;
    this.value = this.formatarMoeda(value);
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
