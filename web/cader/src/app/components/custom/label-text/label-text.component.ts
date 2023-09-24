import { Component, Input } from '@angular/core';

@Component({
  selector: 'labelText',
  templateUrl: './label-text.component.html',
  styleUrls: ['./label-text.component.scss'],
})
export class LabelTextComponent {
  @Input() label: string = '';
}
