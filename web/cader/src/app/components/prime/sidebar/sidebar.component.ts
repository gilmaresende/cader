import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private controller: ControlService) {}
  ngOnInit(): void {
    this.controller.setSideBar(this);
  }
  sidebarVisible: boolean = false;

  showSideBar() {
    this.sidebarVisible = true;
  }
}
