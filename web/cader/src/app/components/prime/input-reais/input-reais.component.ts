import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-reais',
  templateUrl: './input-reais.component.html',
  styleUrls: ['./input-reais.component.scss'],
})
export class InputReaisComponent implements OnInit {
  value: number = 0;
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
