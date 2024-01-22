import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';
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
export class InputDateComponent
  implements ControlValueAccessor, DoCheck, OnInit
{
  @Input() label: string | null = null;
  @Input() placeholder: string = '';
  @Output() valueChanged = new EventEmitter<any>();

  value?: Date;

  touched = false;

  @Input() isDisabled?: ObservableElement;
  disabled = false;

  ngOnInit(): void {
    this.isDisabled?.observable$.subscribe((data) => {
      this.disabled = data;
    });
  }

  ngDoCheck(): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.valueChanged.emit(this.value);
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
    if (value) {
      let milissegundos;
      if (value instanceof Date) {
        this.value = new Date(value.getTime());
      } else {
        milissegundos = value;
      }
    }
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
