import { Component, Input } from '@angular/core';

@Component({
  selector: 'abaHItem',
  templateUrl: './aba-hitem.component.html',
  styleUrls: ['./aba-hitem.component.scss'],
})
export class AbaHItemComponent {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() idAba: string = '';
}
