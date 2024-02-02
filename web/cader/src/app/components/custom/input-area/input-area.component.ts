import { Component, Input, OnInit } from '@angular/core';

import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'inputArea',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputAreaComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputAreaComponent,
    },
  ],
})
export class InputAreaComponent implements ControlValueAccessor, OnInit {
  @Input() isDisabled?: ObservableElement;
  @Input() label: string | null = null;
  @Input() placeholder: string = '';
  @Input() nLine: string = '12';

  value = '';

  touched = false;

  disabled = false;

  ngOnInit(): void {
    this.isDisabled?.observable$.subscribe((data) => {
      this.disabled = data;
    });
  }

  teclar() {
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(this.value);
    }
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
