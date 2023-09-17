import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss'],
})
export class BtnPrimaryComponent {
  @Input() label: string = '';
  @Input() isDisabled: boolean = false;

  @Output() click: EventEmitter<any> = new EventEmitter();
}
