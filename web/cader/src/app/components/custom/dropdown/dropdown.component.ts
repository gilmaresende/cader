import { Component, Input, OnInit, DoCheck } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

interface ItemDrop {
  name: string;
  id: number;
}

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
  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() list: Array<ItemDrop> = [];

  selected: ItemDrop | undefined;

  selectId: number = 0;

  touched = false;

  disabled = false;

  ngOnInit() {
    for (let i = 0; i < this.list.length; i++) {
      let country = this.list[i];
      if (country.id === this.selectId) {
        this.selected = country;
        break;
      }
    }
  }

  ngDoCheck(): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.selectId = (this.selected as ItemDrop).id;

      this.onChange(this.selectId);
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  onChange = (ob: number) => {};

  onTouched = () => {};

  /////////////////////////////////////////////////////////////////////////////////////////////
  //implementação da interface
  /////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * O writeValuemétodo é chamado pelo módulo Angular
   * Forms sempre que o formulário pai
   * deseja definir um valor no controle filho.
   */
  writeValue(id: number) {
    this.selectId = id;
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
