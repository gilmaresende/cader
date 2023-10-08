import { Component, Input, OnInit } from '@angular/core';
import { DataTableService } from './data-table.service';
import { ControlService } from 'src/app/core/services/control.service';
import { SEntidade } from 'src/app/core/model/sentidade';

@Component({
  selector: 'dataTable',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  //atributos fixos
  dataShow: any[] = [];
  selected: SEntidade | undefined;

  //lista com todos os dados
  @Input() data: Array<{}> = [];

  //controlador da lista
  @Input() dataTableObs?: DataTableService<any>;

  //header da tabela
  @Input() header: Array<{ description: string; percentage: number }> = [];

  //atributos que serão cosiderados para exibir
  @Input() atributos: Array<string> = [];

  //contrutor
  constructor(private controller: ControlService) {}

  ngOnInit() {
    this.dataTableObs?.dataOb$.subscribe((listData) => {
      this.dataShow = listData;
    });
    this.controller.setObSelect(undefined);
  }

  public search(value: string) {
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
    this.dataTableObs?.update(listClear);
  }

  select(item: any) {
    this.controller.setObSelect(item);
    this.selected = item;
  }
}
