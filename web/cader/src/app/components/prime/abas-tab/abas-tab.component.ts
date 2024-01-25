import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'abas-tab',
  templateUrl: './abas-tab.component.html',
  styleUrls: ['./abas-tab.component.scss'],
})
export class AbasTabComponent {
  @Input() titles: Array<string> = [];
}
