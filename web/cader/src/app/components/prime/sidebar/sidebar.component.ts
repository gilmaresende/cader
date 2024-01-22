import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/core/services/pages.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private controller: PagesService) {}
  ngOnInit(): void {
    this.controller.setSideBar(this);
  }
  sidebarVisible: boolean = false;

  showSideBar() {
    this.sidebarVisible = true;
  }
}
