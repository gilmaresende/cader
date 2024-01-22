import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

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
export class InputReaisComponent implements ControlValueAccessor, OnInit {
  @Input() label: string | null = null;
  @Input() placeholder: string = '';
  @Input() alwaysDisabled: boolean = false;

  @Output() valueChanged = new EventEmitter<any>();

  value = 0;

  touched = false;

  @Input() isDisabled?: ObservableElement;
  disabled = false;
  disabled2 = false;

  ngOnInit(): void {
    if (this.alwaysDisabled) {
      this.disabled2 = true;
    } else {
      this.isDisabled?.observable$.subscribe((data) => {
        this.disabled = data;
        this.disabled2 = data;
      });
    }
  }

  teclar() {
    this.markAsTouched();
    if (!this.disabled2) {
      this.valueChanged.emit(this.value);
      this.onChange(this.value);
    }
  }

  formatarMoeda(valor: any) {
    let dividirPor100 = false;
    if (valor < 1) {
      dividirPor100 = true;
    }

    valor = valor + '';
    valor = parseFloat(valor.replace(/[\D]+/g, ''));

    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, '.$1');

    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3})([0-9]{2}$)/g, '$1.$2');
    }
    if (dividirPor100) {
      valor = valor / 100;
    }
    return valor;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////
  //que funções são essas?
  /////////////////////////////////////////////////////////////////////////////////////////////

  onChange = (quantity: any) => {};

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
    if (value % 1 == 0) {
      value = value * 100;
    }
    this.value = value;
    // this.value = this.formatarMoeda(value);
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
