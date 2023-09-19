import { Component, Input, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent implements OnInit, DoCheck {
  date: Date | undefined;

  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() ob: any;
  @Input() atributo: any = '';
  @Input() placeholder: string = '';

  ngOnInit(): void {
    if (this.ob && this.ob[this.atributo]) {
      this.date = this.ob[this.atributo];
    }
  }

  ngDoCheck(): void {
    if (this.ob && this.ob[this.atributo]) {
      this.ob[this.atributo] = this.date;
    }
  }

  cleanDate() {
    this.ob[this.atributo] = this.date = undefined;
  }
}
