import { Component, Input } from '@angular/core';
import { CardInvoiceLaunch } from 'src/app/model/card-invoice-launch';

@Component({
  selector: 'card-invoice-launch',
  templateUrl: './card-invoice-launch.component.html',
  styleUrls: ['./card-invoice-launch.component.scss'],
})
export class CardInvoiceLaunchComponent {
  @Input() listLaunches: Array<CardInvoiceLaunch> = [];
}
