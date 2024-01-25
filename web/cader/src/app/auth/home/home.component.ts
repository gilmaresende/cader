import { Component, OnInit } from '@angular/core';
import { StatePage } from 'src/app/core/enuns/statePage';
import { PagesService } from 'src/app/core/services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private controller: PagesService) {}

  ngOnInit(): void {
    this.controller.setStatePage(StatePage.HOME);
    this.controller.setTitle('Home');
  }
}
