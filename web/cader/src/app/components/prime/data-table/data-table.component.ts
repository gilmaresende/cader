import { Component, OnInit, Input } from '@angular/core';
import { SEntidade } from 'src/app/core/model/sentidade';
import { ControlService } from 'src/app/core/services/control.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  selected: SEntidade | undefined;
  @Input() header: Array<{ description: string; percentage: number }> = [];
  @Input() atributos: Array<string> = [];
  dataShow: Array<{}> = [];
  @Input() data: Array<{}> = [];

  constructor(private controller: ControlService) {}

  ngOnInit() {
    this.dataShow = this.data;
    this.controller.setObSelect(undefined);
  }

  public search(value: string) {
    this.dataShow = [];
    let filterMain: Array<{}> = [];
    for (let atr of this.atributos) {
      let filter = this.data.filter((res: any) => {
        if (res[atr]) {
          const str: string = res[atr].toString();
          return !str.toLocaleLowerCase().indexOf(value.toLocaleLowerCase());
        }
        return false;
      });
      Array.prototype.push.apply(filterMain, filter);
    }
    const listClear = filterMain.filter(
      (item, i) => filterMain.indexOf(item) === i
    );
    this.dataShow = listClear;
  }

  select(item: any) {
    this.controller.setObSelect(item);
    this.selected = item;
  }
}
