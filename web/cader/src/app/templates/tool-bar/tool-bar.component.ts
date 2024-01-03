import { Component, OnInit } from '@angular/core';
import { StatePage } from 'src/app/core/enuns/statePage';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'toolbar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  constructor(private controller: ControlService) {}
  title: string = '';

  isInsert: boolean = false;
  isList: boolean = false;
  isEdit: boolean = false;
  isView: boolean = false;
  isListFilter: boolean = false;

  setHome() {
    this.isListFilter =
      this.isInsert =
      this.isList =
      this.isEdit =
      this.isView =
        false;
  }

  setInsert() {
    this.isListFilter = this.isList = this.isEdit = this.isView = false;
    this.isInsert = true;
  }

  setView() {
    this.isListFilter = this.isInsert = this.isList = this.isEdit = false;
    this.isView = true;
  }

  setEdit() {
    this.isListFilter = this.isView = this.isInsert = this.isList = false;
    this.isEdit = true;
  }

  public setList() {
    this.isListFilter = this.isEdit = this.isView = this.isInsert = false;
    this.isList = true;
  }

  public setListFilter() {
    this.isList = this.isEdit = this.isView = this.isInsert = false;
    this.isListFilter = true;
  }

  ngOnInit(): void {
    this.controller.setTooBar(this);
    this.checkState();
  }

  checkState() {
    this.title = this.controller.getTitle();
    if (this.controller.statePage === StatePage.EDIT) {
      this.setEdit();
    } else if (this.controller.statePage === StatePage.INSERT) {
      this.setInsert();
    } else if (this.controller.statePage === StatePage.LIST) {
      this.setList();
    } else if (this.controller.statePage === StatePage.VIEW) {
      this.setView();
    } else if (this.controller.statePage === StatePage.LIST_FILTER) {
      this.setListFilter();
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

  edit() {
    this.controller.edit();
  }

  cancel() {
    this.controller.reload();
  }

  goToList() {
    this.controller.goToList();
  }

  showFilter() {
    this.controller.showFilter();
  }
}
