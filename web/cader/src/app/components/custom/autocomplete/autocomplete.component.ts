import { Component, Input, OnInit, DoCheck } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { DescriptionId } from 'src/app/core/model/description-id';
import { SEntidade } from 'src/app/core/model/sentidade';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AutocompleteComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AutocompleteComponent,
    },
  ],
})
export class AutocompleteComponent
  implements OnInit, DoCheck, ControlValueAccessor
{
  @Input() label: string | null = null;
  list: Array<DescriptionId> = [];

  @Input() service!: BaseHttpService<SEntidade>;

  @Input() alwaysDisabled: boolean = false;

  allData: Array<DescriptionId> = [];

  selected?: DescriptionId;

  touched = false;

  @Input() isDisabled?: ObservableElement;
  disabled = false;
  disabled2 = false;

  ngOnInit(): void {
    this.getCombo();
    if (this.alwaysDisabled) {
      this.disabled2 = true;
    } else {
      this.isDisabled?.observable$.subscribe((data) => {
        this.disabled = data;
        this.disabled2 = data;
      });
    }
  }

  getCombo() {
    this.service.getCombo().subscribe({
      next: (res) => {
        this.list = this.allData = res.itemsCombo;
        // if (res.datas) {
        //   for (let i = 0; i < this.allData.length; i++) {
        //     let item = this.allData[i];
        //     if (item.id === this.selectId) {
        //       this.selected = item;
        //       this.selectId = (this.selected as ItemDrop).id;
        //       break;
        //     }
        //   }
        // }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngDoCheck(): void {
    this.markAsTouched();
    if (!this.disabled && this.selected) {
      this.onChange(this.selected);
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  onChange = (ob: DescriptionId | undefined) => {};

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
    this.selected = ob;
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

  filter(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.allData.length; i++) {
      let item = this.allData[i];
      if (item.description.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }
    this.list = filtered;
  }

  cleanSeleted() {
    this.selected = undefined;
    this.onChange(this.selected);
  }
}
