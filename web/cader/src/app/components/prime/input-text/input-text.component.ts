import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent2 implements OnInit {
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
