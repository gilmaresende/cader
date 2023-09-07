import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
})
export class InputSwitchComponent implements OnInit {
  checked: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() label: string = '';
  @Input() ob: any;
  @Input() atributo: any = '';

  onClick(): void {
    if (this.ob && this.ob[this.atributo] !== undefined) {
      this.ob[this.atributo] = this.checked ? 1 : 0;
    }
  }

  onClickLabel(): void {
    if (this.ob && this.ob[this.atributo] !== undefined) {
      this.checked = !this.checked;
      this.ob[this.atributo] = this.checked ? 1 : 0;
    }
  }

  ngOnInit(): void {
    if (this.ob && this.ob[this.atributo]) {
      this.checked = this.ob[this.atributo] === 1 ? true : false;
    }
  }
}
