import { Component, Input, OnInit, DoCheck } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { DescriptionId } from 'src/app/core/model/description-id';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DropdownComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DropdownComponent,
    },
  ],
})
export class DropdownComponent
  implements OnInit, DoCheck, ControlValueAccessor
{
  @Input() label: string | null = null;
  @Input() list: Array<DescriptionId> = [];

  @Input() isDisabled?: ObservableElement;

  selected?: DescriptionId;

  touched = false;

  description = 'dev';

  @Input() alwaysDisabled: boolean = false;
  disabled = false;
  disabled2 = false;

  ngOnInit() {
    this.markAsTouched();
    if (this.selected) {
      this.onChange(this.selected);
    }

    if (this.alwaysDisabled) {
      this.disabled2 = true;
    } else {
      this.isDisabled?.observable$.subscribe((data) => {
        this.disabled = data;
        this.disabled2 = data;
      });
    }
  }

  ngDoCheck(): void {
    this.markAsTouched();
    if (!this.isDisabled && this.selected) {
      //if (this.selected) {
      this.description = this.selected.description;
      this.onChange(this.selected);
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  onChange = (ob: DescriptionId) => {};

  onTouched = () => {};

  /////////////////////////////////////////////////////////////////////////////////////////////
  //implementação da interface
  /////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * O writeValuemétodo é chamado pelo módulo Angular
   * Forms sempre que o formulário pai
   * deseja definir um valor no controle filho.
   */
  writeValue(ob: DescriptionId) {
    if (this.isDisabled && ob) {
      this.selected = ob;
      this.description = ob.description;
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
    // this.isDisabled = disabled;
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
