import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DescriptionStr } from 'src/app/core/model/description-str';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { HttpServerService } from 'src/app/core/services/http-server.service';
import { ConstBIPrimitiveOrEntity, ConstBITypePrimitive } from 'src/app/data';
import { BI } from 'src/app/model-bi/bi';
import { BIData } from 'src/app/model-bi/bidata';
import { BIPlayService } from 'src/app/services/biplay.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

interface ListCombo {
  class: string;
  list: Array<DescriptionStr>;
}

@Component({
  selector: 'app-biplay-view',
  templateUrl: './biplay-view.component.html',
  styleUrls: ['./biplay-view.component.scss'],
})
export class BIPlayViewComponent extends SPage<BI, BIPlayService> {
  constTypeInputs = ConstBITypePrimitive;
  constPrimitiEntity = ConstBIPrimitiveOrEntity;
  listComboClass: any = {};

  bi?: BIData;

  constructor(
    private http: HttpServerService,
    private service: BIPlayService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Play Bi', service, factory, actRote);
  }

  pesquisarCombosClass() {
    this.bi?.bIParameters.forEach((param) => {
      if (param.typePrimitiveOrEntity.id == this.constPrimitiEntity.ENTITY.id) {
        this.service.findComboReport(param!.typeClass!.id).subscribe({
          next: (res) => {
            const obseElement: ObservableImpl<DescriptionStr> =
              this.listComboClass[param.typeClass?.id!];
            obseElement.update(res.data);
          },
          error: (error) => {},
        });
      }
    });
  }

  override populatedForm(ob: BI) {
    this.form = this.formBuilder.group({
      id: [ob.id],
    });
    this.bi = JSON.parse(ob.data);
    console.log(this.bi);

    this.bi?.bIParameters.forEach((param) => {
      this.form.addControl(
        param.key,
        this.formBuilder.control(param.valueDefault)
      );

      if (param.typePrimitiveOrEntity.id == this.constPrimitiEntity.ENTITY.id) {
        const observable = new ObservableImpl<DescriptionStr>();
        this.listComboClass[param.typeClass?.id!] = observable;
      }
    });

    this.pesquisarCombosClass();
  }

  override getOb(): BI {
    return this.service.newInstance();
  }

  getParametros() {
    const form = this.form?.value;
    return form;
  }

  playBi() {
    const params = this.getParametros();
    this.http.post('biPlay/playBi', params).subscribe({
      next: (res) => {
        const blobUrl = URL.createObjectURL(res);

        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = 'DOWNLOAD_FILE.CSV';
        downloadLink.click();
        downloadLink.remove();
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
}
