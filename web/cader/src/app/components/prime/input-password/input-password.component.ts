import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent implements OnInit {
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
