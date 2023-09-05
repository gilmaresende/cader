import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  customers: Array<{}> = [];

  header: Array<{ description: string; percentage: number }> = [];
  atributos: Array<string> = [];
  //{ id: number; nome: string; idade: number; cidade: string }
  data: Array<{}> = [{ id: 1, nome: 'A', idade: 10, cidade: 'bh' }];

  ngOnInit() {
    this.header = [
      { description: 'Id', percentage: 10 },
      { description: 'Nome', percentage: 25 },
      { description: 'Idade', percentage: 25 },
      { description: 'Origem', percentage: 25 },
    ];
    this.atributos = ['id', 'nome', 'idade', 'cidade'];
  }
}
