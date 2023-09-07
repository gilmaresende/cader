import { Component, OnInit } from '@angular/core';
import { StatePage } from 'src/app/core/enuns/statePage';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private controller: ControlService) {}
  title: string = '';

  isInsert: boolean = false;
  isList: boolean = false;
  isEdit: boolean = false;
  isView: boolean = false;

  setHome() {
    this.isInsert = this.isList = this.isEdit = this.isView = false;
  }

  setInsert() {
    this.isList = this.isEdit = this.isView = false;
    this.isInsert = true;
    console.log('setInsert=', this.isEdit);
  }

  setView() {
    this.isInsert = this.isList = this.isEdit = false;
    this.isView = true;
    console.log('setView=', this.isEdit);
  }

  setEdit() {
    this.isView = this.isInsert = this.isList = false;
    this.isEdit = true;
    console.log('setEdit=', this.isEdit);
  }

  public setList() {
    this.isEdit = this.isView = this.isInsert = false;
    this.isList = true;
    console.log('setList=', this.isEdit);
  }

  setTitle(title: string) {
    this.title = title;
    console.log(title);
  }

  ngOnInit(): void {
    this.controller.setTooBar(this);
    this.title = this.controller.getTitle();
    if (this.controller.statePage === StatePage.EDIT) {
      this.setEdit();
    } else if (this.controller.statePage === StatePage.INSERT) {
      this.setInsert();
    } else if (this.controller.statePage === StatePage.LIST) {
      this.setList();
    } else if (this.controller.statePage === StatePage.VIEW) {
      this.setView();
    } else {
      this.setHome();
    }
  }

  save() {
    this.controller.save();
  }

  delete() {
    this.controller.delete();
  }

  showSidebar() {
    this.controller.showSidebar();
  }

  load() {
    this.controller.load();
  }

  newOb() {
    this.controller.newOb();
  }
}
