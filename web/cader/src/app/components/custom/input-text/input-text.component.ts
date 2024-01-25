import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';
import { ObservableValid } from 'src/app/struct/observable/observable-valid-impl.service';

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
export class InputTextComponent implements ControlValueAccessor, OnInit {
  @Input() label: string | null = null;
  @Input() placeholder: string = '';
  @Input() observableValid?: ObservableValid;
  @Output() valueChanged = new EventEmitter<string>();
  hasError: boolean = false;
  errorMessage: string = '';
  isTooltipVisible: boolean = false;

  @Input() isDisabled?: ObservableElement;
  disabled = false;

  ngOnInit(): void {
    this.observableValid?.observable$.subscribe((data) => {
      this.showErros(data);
    });

    this.isDisabled?.observable$.subscribe((data) => {
      this.disabled = data;
    });
  }
  showErros(data: Array<string>) {
    this.hasError = true;
    this.errorMessage = data.toString();
  }

  value = '';

  touched = false;

  teclar() {
    this.markAsTouched();
    if (!this.disabled) {
      this.valueChanged.emit(this.value);
      this.onChange(this.value);
    }
  }

  cleanErros() {
    this.hasError = false;
    this.errorMessage = '';
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

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
}
