import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ObservableElement } from 'src/app/struct/observable/observable-element.service';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss'],
})
export class BtnPrimaryComponent implements OnInit {
  @Input() label: string = '';

  @Input() isDisabled?: ObservableElement;
  disabled = false;

  ngOnInit(): void {
    this.isDisabled?.observable$.subscribe((data) => {
      this.disabled = data;
    });
  }

  @Output() click: EventEmitter<any> = new EventEmitter();
}
