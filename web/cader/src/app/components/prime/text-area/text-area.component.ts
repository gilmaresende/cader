import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  @Input() nRows: number = 25;
  @Input() nCols: number = 250;

  value: string = '';
  @Input() isDisabled: boolean = false;
  @Input() label: string | null = null;
  @Input() ob: any;
  @Input() atributo: any = '';
  @Input() placeholder: string = '';

  ngOnInit(): void {
    if (this.ob && this.ob[this.atributo]) {
      this.value = this.ob[this.atributo];
    }
  }

  teclar() {
    this.ob[this.atributo] = this.value;
  }
}
