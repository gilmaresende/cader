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
  selector: 'inputRadio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputRadioComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputRadioComponent,
    },
  ],
})
export class InputRadioComponent implements ControlValueAccessor, OnInit {
  @Input() isDisabled?: ObservableElement;
  @Input() label: string | null = null;
  @Input() id: string | null = null;

  @Input() name: string = '';
  @Input() value: any;
  @Input() valueFix: any;

  @Output() valueChanged = new EventEmitter<any>();

  touched = false;

  disabled = false;
  disabled2 = false;

  ngOnInit(): void {
    this.isDisabled?.observable$.subscribe((data) => {
      this.disabled2 = data;
      this.disabled = data;
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////
  //que funções são essas?
  /////////////////////////////////////////////////////////////////////////////////////////////

  onChange = (value: any) => {};

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
