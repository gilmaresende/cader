import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { SEntidade } from 'src/app/core/model/sentidade';
import { BaseHttpService } from 'src/app/core/services/base-http.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit, DoCheck {
  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() ob: any;
  @Input() atributo: any = '';
  @Input() placeholder: string = '';
  @Input() service!: BaseHttpService<SEntidade>;

  countries: Array<{ id: number; description: string }> = [];

  selectedCountry: any;

  filteredCountries: Array<{}> = [];

  constructor() {}
  ngDoCheck(): void {
    if (this.selectedCountry) this.ob[this.atributo] = this.selectedCountry.id;
  }

  ngOnInit() {
    this.getCombo();
  }

  getCombo() {
    this.service.getCombo().subscribe({
      next: (res) => {
        this.countries = res.datas;
        if (this.ob && this.ob[this.atributo]) {
          for (let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if (country.id === this.ob[this.atributo]) {
              this.selectedCountry = country;
              break;
            }
          }
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.description.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredCountries = filtered;
  }

  cleanSeleted() {
    this.ob[this.atributo] = this.selectedCountry = undefined;
  }
}
