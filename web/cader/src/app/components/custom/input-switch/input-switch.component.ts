import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

@Component({
  selector: 'inputSwitch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputSwitchComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputSwitchComponent,
    },
  ],
})
export class InputSwitchComponent implements OnInit {
  @Input() label: string | null = null;
  @Input() placeholder: string = '';

  checked: boolean = true;

  touched = false;

  @Input() isDisabled?: ObservableElement;
  disabled = false;

  ngOnInit(): void {
    this.isDisabled?.observable$.subscribe((data) => {
      this.disabled = data;
    });
  }

  onClick(): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(this.checked ? 1 : 0);
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////
  //que funções são essas?
  /////////////////////////////////////////////////////////////////////////////////////////////

  onChange = (quantity: number) => {};

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
    this.checked = value == 1;
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
