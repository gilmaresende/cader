import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ObservableTreeService } from 'src/app/components/custom/tree/observable-tree.service';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
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

  public queryOb!: ObservableTreeService<BIQuery>;
  public observableParameter!: ObservableImpl<BIParameter>;

  constructor(
    private service: BiService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Bi Manager', service, factory, actRote);
  }

  override instanceList(): void {
    this.queryOb = new ObservableTreeService<BIQuery>();
    this.observableParameter = new ObservableImpl<BIParameter>();
  }

  ngOnInit(): void {
    this.populatedForm(this.service.newInstance());
  }

  override populatedForm(ob: BI) {
    this.form = this.formBuilder.group({
      name: [ob.name, Validators.required],
      update: [ob.update, Validators.required],
    });
    this.bi = JSON.parse(ob.data);
    const query = [this.bi!.query];

    this.queryOb.update(query);
    this.observableParameter.update(this.bi!.bIParameters);
  }

  override getOb(): BI {
    const biStr: string = JSON.stringify(this.bi);
    const form = this.form?.value;
    const res: BI = {
      update: form.update,
      data: biStr,
      name: form.name,
    };
    return res;
  }
}
