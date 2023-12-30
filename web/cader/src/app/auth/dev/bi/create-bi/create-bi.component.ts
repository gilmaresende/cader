import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ObservableTreeService } from 'src/app/components/custom/tree/observable-tree.service';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { HttpServerService } from 'src/app/core/services/http-server.service';
import { BI } from 'src/app/model-bi/bi';
import { BIData } from 'src/app/model-bi/bidata';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { BIQuery } from 'src/app/model-bi/biquery';
import { BiService } from 'src/app/services/bi.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

@Component({
  selector: 'app-create-bi',
  templateUrl: './create-bi.component.html',
  styleUrls: ['./create-bi.component.scss'],
})
export class CreateBiComponent extends SPage<BI, BiService> implements OnInit {
  bi?: BIData;
  typesParameter: Array<{ value: string; label: string }> = [];
  public queryOb: ObservableTreeService<BIQuery> =
    new ObservableTreeService<BIQuery>();

  public observableParameter: ObservableImpl<BIParameter> =
    new ObservableImpl<BIParameter>();

  constructor(
    private controller: ControlService,
    private http: HttpServerService,
    private service: BiService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Bi Manager', controller, service, activatedRoute);
  }

  ngOnInit(): void {
    this.populatedForm(this.service.newInstance());
  }

  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    update: new FormControl(),
  });

  override populatedForm(ob: BI) {
    this.bi = JSON.parse(ob.data);
    const form = this.form.controls;

    form.name.setValue(ob.name);
    form.id.setValue(ob.id!);
    form.update.setValue(ob.update);

    this.observableParameter.update(this.bi!.bIParameters);
    this.queryOb.update([this.bi!.query]);
  }

  override getOb(): BI {
    const form = this.form.controls;
    this.bi!.name = form.name.value as string;

    const ob = JSON.stringify(this.bi);
    return {
      id: form.id.value as number,
      data: ob,
      update: form.update.value,
      name: form.name.value as string,
    };
  }

  show() {
    this.form.errors;
    console.log(this.form.errors);
  }
}
