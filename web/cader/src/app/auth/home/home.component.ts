import { Component, OnInit } from '@angular/core';
import { StatePage } from 'src/app/core/enuns/statePage';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private controller: ControlService) {}

  ngOnInit(): void {
    this.controller.setStatePage(StatePage.HOME);
    this.controller.setTitle('Home');
  }
}
