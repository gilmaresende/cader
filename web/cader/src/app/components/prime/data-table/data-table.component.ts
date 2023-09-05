import { Component, OnInit } from '@angular/core';
import { SEntidade } from 'src/app/core/model/sentidade';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  selected: SEntidade | undefined;
  header: Array<{ description: string; percentage: number }> = [];
  atributos: Array<string> = [];
  dataShow: Array<{}> = [];
  data: Array<{}> = [
    { id: 1, nome: 'Gilmar', idade: 10, cidade: 'Itauna' },
    { id: 2, nome: 'Livia', idade: 10, cidade: 'Crucilandia' },
    { id: 3, nome: 'Thamires', idade: 10, cidade: 'Bom despache' },
    { id: 1, nome: 'Gilmar', idade: 10, cidade: 'Itauna' },
    { id: 2, nome: 'Livia', idade: 10, cidade: 'Crucilandia' },
    { id: 3, nome: 'Thamires', idade: 10, cidade: 'Bom despache' },
    { id: 1, nome: 'Gilmar', idade: 10, cidade: 'Itauna' },
    { id: 2, nome: 'Livia', idade: 10, cidade: 'Crucilandia' },
    { id: 3, nome: 'Thamires', idade: 10, cidade: 'Bom despache' },
    { id: 1, nome: 'Gilmar', idade: 10, cidade: 'Itauna' },
    { id: 2, nome: 'Livia', idade: 10, cidade: 'Crucilandia' },
    { id: 3, nome: 'Thamires', idade: 10, cidade: 'Bom despache' },
  ];

  ngOnInit() {
    this.header = [
      { description: 'Id', percentage: 10 },
      { description: 'Nome', percentage: 25 },
      { description: 'Idade', percentage: 25 },
      { description: 'Origem', percentage: 25 },
    ];
    this.dataShow = this.data;
    this.atributos = ['id', 'nome', 'idade', 'cidade'];
  }

  public search(value: string) {
    this.dataShow = [];
    let filterMain: Array<{}> = [];
    for (let atr of this.atributos) {
      let filter = this.data.filter((res: any) => {
        const str: string = res[atr].toString();
        return !str.toLocaleLowerCase().indexOf(value.toLocaleLowerCase());
      });
      Array.prototype.push.apply(filterMain, filter);
    }
    const listClear = filterMain.filter(
      (item, i) => filterMain.indexOf(item) === i
    );
    this.dataShow = listClear;
  }
}
