import { Component, Input, OnInit } from '@angular/core';
import { DataTableService } from './data-table.service';

@Component({
  selector: 'dataTable',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  listData: any[] = [];

  @Input() dataTableObs?: DataTableService<any>;
  constructor() {}

  ngOnInit() {
    this.dataTableObs?.dataOb$.subscribe((listData) => {
      this.listData = listData;
    });
  }
}
