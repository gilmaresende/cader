import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DescriptionStr } from 'src/app/core/model/description-str';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { DownloadService } from 'src/app/core/services/download.service';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { downloadFile } from 'src/app/core/utils/File/tool-files';
import { ConstBIPrimitiveOrEntity, ConstBITypePrimitive } from 'src/app/data';
import { ConstFormat } from 'src/app/data/ConstantsFormatFiles';
import { BI } from 'src/app/model-bi/bi';
import { BIData } from 'src/app/model-bi/bidata';
import { BIPlayService } from 'src/app/services/biplay.service';
import { ObservableImpl } from 'src/app/struct/observable/observable-impl.service';

@Component({
  selector: 'app-biplay-view',
  templateUrl: './biplay-view.component.html',
  styleUrls: ['./biplay-view.component.scss'],
})
export class BIPlayViewComponent extends SPage<BI, BIPlayService> {
  constTypeInputs = ConstBITypePrimitive;
  constPrimitiEntity = ConstBIPrimitiveOrEntity;
  constFormat = ConstFormat;
  listComboClass: any = {};

  bi?: BIData;

  constructor(
    private service: BIPlayService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute,
    private downloadService: DownloadService
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
      format: [],
    });
    this.bi = JSON.parse(ob.data);

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
    this.downloadService.downloadFile('biPlay/playBi', params).subscribe({
      next: (res) => {
        downloadFile(res);
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
