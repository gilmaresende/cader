import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ObservableTreeService } from 'src/app/components/custom/tree/observable-tree.service';
import { ModalTree } from 'src/app/components/custom/tree/tree.component';
import { DescriptionStr } from 'src/app/core/model/description-str';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { HttpServerService } from 'src/app/core/services/http-server.service';
import { BI } from 'src/app/model-bi/bi';
import { BIData } from 'src/app/model-bi/bidata';
import { BIParameter } from 'src/app/model-bi/biparameter';
import { BIPlayService } from 'src/app/services/biplay.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

@Component({
  selector: 'app-biplay-view',
  templateUrl: './biplay-view.component.html',
  styleUrls: ['./biplay-view.component.scss'],
})
export class BIPlayViewComponent
  extends SPage<BI, BIPlayService>
  implements OnInit
{
  constructor(
    private controller: ControlService,
    private http: HttpServerService,
    private service: BIPlayService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Bi Manager', controller, service, activatedRoute);
  }

  form = new FormGroup({
    value: new FormControl(),
  });

  ngOnInit(): void {}

  bi?: BIData;
  parametros: Array<ModalTree> = [];
  parameterCurrent?: BIParameter;
  data: any;

  value: any;
  observableParametros: ObservableTreeService<ModalTree> =
    new ObservableTreeService();

  override populatedForm(ob: BI) {
    this.bi = JSON.parse(ob.data);
    this.bi?.bIParameters.forEach((item) => {
      this.parametros.push({
        label: item.name,
        data: { valor: item.valueDefault, item },
        key: item.key,
        children: [],
      });
    });
    this.observableParametros.update(this.parametros);
  }

  override getOb(): BI {
    return this.service.newInstance();
  }

  toForm(item: ModalTree) {
    this.form.controls.value.setValue(item.data.valor);
    this.data = item.data;
    this.parameterCurrent = item.data.item;
  }

  newValue(event: any) {
    this.data.valor = event;
  }

  playBi() {
    console.log(this.parametros);
    this.parametros.forEach((item) => {
      console.log(item.key);
      console.log(item.data.valor);
    });
  }

  toListStr(data: any) {
    const options: Array<DescriptionStr> = [];
    data.forEach((item: any) =>
      options.push({ id: item.value, description: item.name })
    );
    return options;
  }
}
