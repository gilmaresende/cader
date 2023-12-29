import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { HttpServerService } from 'src/app/core/services/http-server.service';
import { BI } from 'src/app/model-bi/bi';
import { BIQuery } from 'src/app/model-bi/biquery';
import { BiService } from 'src/app/services/bi.service';
import { ObservableTreeService } from 'src/app/components/custom/tree/observable-tree.service';

@Component({
  selector: 'app-create-bi',
  templateUrl: './create-bi.component.html',
  styleUrls: ['./create-bi.component.scss'],
})
export class CreateBiComponent extends SPage<BI, BiService> implements OnInit {
  bi?: BI;
  typesParameter: Array<{ value: string; label: string }> = [];
  public queryOb: ObservableTreeService<BIQuery> =
    new ObservableTreeService<BIQuery>();

  constructor(
    private controller: ControlService,
    private http: HttpServerService,
    private service: BiService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Bi Manager', controller, service, activatedRoute);
  }

  ngOnInit(): void {
    this.bi = this.service.newInstance();
    this.populatedForm(this.bi);
  }

  form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
  });

  override populatedForm(ob: BI) {
    this.bi = ob;
    const form = this.form.controls;
    form.name.setValue(ob.name);

    this.queryOb.update([ob.query]);
  }

  override getOb(): BI {
    const form = this.form.controls;
    this.bi!.id = form.id.value as number;
    this.bi!.name = form.name.value as string;
    return this.bi!;
  }

  show() {
    const bi = this.getOb();
    console.log(bi);
  }
}
