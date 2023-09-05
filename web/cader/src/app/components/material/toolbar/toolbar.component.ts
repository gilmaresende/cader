import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private controller: ControlService) {}
  title: string = '';

  setTitle(title: string) {
    this.title = title;
    console.log(title);
  }

  ngOnInit(): void {
    this.controller.setTooBar(this);
  }

  save() {
    this.controller.save();
  }

  delete() {
    this.controller.delete();
  }
}
