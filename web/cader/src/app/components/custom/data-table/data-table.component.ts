import { Component, OnInit } from '@angular/core';
import { ExpensePayment } from 'src/app/model/expense-payment';
import { DataTableService } from './data-table.service';

@Component({
  selector: 'dataTable',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  listData: ExpensePayment[] = [];

  constructor(private dataTableService: DataTableService) {}

  ngOnInit() {
    this.dataTableService.users$.subscribe((listData) => {
      this.listData = listData;
    });
  }
}
