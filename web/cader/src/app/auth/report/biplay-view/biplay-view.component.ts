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
    super('Play Bi', controller, service, activatedRoute);
  }

  form = new FormGroup({
    value: new FormControl(),
  });

  ngOnInit(): void {}

  id: number = 0;
  bi?: BIData;
  parametros: Array<ModalTree> = [];
  parameterCurrent?: BIParameter;
  data: any;
  combo: { class: string; list: Array<DescriptionStr> } = {
    class: '',
    list: [],
  };
  value: any;
  observableParametros: ObservableTreeService<ModalTree> =
    new ObservableTreeService();

  observableList?: ObservableImpl<DescriptionStr> =
    new ObservableImpl<DescriptionStr>();

  override populatedForm(ob: BI) {
    this.id = ob.id!;
    this.controller.setTitle(`${ob.name}`);
    this.bi = JSON.parse(ob.data);
    this.bi?.bIParameters.forEach((item) => {
      this.parametros.push({
        label: item.name,
        data: { valor: this.getValueDefault(item), item },
        key: item.key,
        children: [],
      });
    });
    this.observableParametros.update(this.parametros);
  }

  override getOb(): BI {
    return this.service.newInstance();
  }

  getValueDefault(item: BIParameter): DescriptionStr | string {
    if (item.customized) {
      const opSelection = item.optionsDefined.find((i) => {
        return i.value == item.valueDefault;
      });

      if (opSelection) {
        return {
          id: opSelection.value,
          description: opSelection.name,
        };
      } else {
        return '';
      }
    } else {
      return item.valueDefault;
    }
  }

  async toForm(item: ModalTree) {
    this.form.controls.value.setValue(item.data.valor);
    this.data = item.data;
    this.parameterCurrent = item.data.item;
    if (this.data.item.typeInput == 2) {
      this.toListEntity(this.data.item);
    }
  }

  newValue(event: any) {
    this.data.valor = event;
  }

  playBi() {
    const parameter: Array<any> = [];

    this.parametros.forEach((item) => {
      parameter.push({ key: item.key, value: item.data.valor });
    });

    this.service.playReport({ idBI: this.id, parameter: parameter }).subscribe({
      next: (res) => {
        this.combo = res.data;
        this.observableList?.update(res.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  toListStr(data: any) {
    const options: Array<DescriptionStr> = [];
    data.forEach((item: any) =>
      options.push({ id: item.value, description: item.name })
    );
    return options;
  }

  toListEntity(item: BIParameter) {
    if (
      this.combo.class !== item!.typeClass!.id ||
      this.combo.list.length < 0
    ) {
      this.combo.class = item!.typeClass!.id;
      this.service.findComboReport(item!.typeClass!.id).subscribe({
        next: (res) => {
          this.combo = res.data;
          this.observableList?.update(res.data);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

    return [];
  }
}
