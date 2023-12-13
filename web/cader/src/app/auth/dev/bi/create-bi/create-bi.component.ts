import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlService } from 'src/app/core/services/control.service';
import { HttpServerService } from 'src/app/core/services/http-server.service';
import { BI } from 'src/app/model-bi/bi';
import { BIQuery } from 'src/app/model-bi/biquery';
import { BiService } from 'src/app/services/bi.service';

@Component({
  selector: 'app-create-bi',
  templateUrl: './create-bi.component.html',
  styleUrls: ['./create-bi.component.scss'],
})
export class CreateBiComponent implements OnInit {
  constructor(
    private controller: ControlService,
    private http: HttpServerService,
    private service: BiService
  ) {
    controller.setTitle('Bi Manager');
  }

  typesParameter: Array<{ value: string; label: string }> = [];

  ngOnInit(): void {
    this.populateForm();
  }

  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    update: new FormControl(new Date()),
  });

  query?: BIQuery;
  bi?: BI;

  populateForm() {
    const ob = this.service.getBI();
    this.bi = ob;
    const form = this.form.controls;
    form.name.setValue(ob.name);

    this.query = ob.query;

    this.setDad(this.query);
  }

  setDad(item: BIQuery) {
    const id = Math.random() + new Date().getTime();
    item.id = id.toString();
    for (let i of item.queriesChildren) {
      i.dad = item;

      this.setDad(i);
    }
  }
}
