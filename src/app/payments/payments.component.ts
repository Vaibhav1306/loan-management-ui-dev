import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  PaymentId: number;
  CustomerId: string;
  CustomerName: string;
  Amount: string;
  Tax: string;
  Mode: string;
  Date: string;
  Notes: string;
}

const tableData = [
  {
    PaymentId: 4564656,
    CustomerId: 'Vaibhav',
    CustomerName: 'Shrivastava',
    Amount: 'xxte562342',
    Tax: 'dtcdfeg@hgxh.com',
    Mode: 'New York',
    Date: 'Some Depart...',
    Notes: 'This is payment notes',
  },
  {
    PaymentId: 4564656,
    CustomerId: 'Vaibhav',
    CustomerName: 'Shrivastava',
    Amount: 'xxte562342',
    Tax: 'dtcdfeg@hgxh.com',
    Mode: 'New York',
    Date: 'Some Depart...',
    Notes: 'This is payment notes',
  },
  {
    PaymentId: 4564656,
    CustomerId: 'Vaibhav',
    CustomerName: 'Shrivastava',
    Amount: 'xxte562342',
    Tax: 'dtcdfeg@hgxh.com',
    Mode: 'New York',
    Date: 'Some Depart...',
    Notes: 'This is payment notes',
  },
  {
    PaymentId: 4564656,
    CustomerId: 'Vaibhav',
    CustomerName: 'Shrivastava',
    Amount: 'xxte562342',
    Tax: 'dtcdfeg@hgxh.com',
    Mode: 'New York',
    Date: 'Some Depart...',
    Notes: 'This is payment notes',
  },
  {
    PaymentId: 4564656,
    CustomerId: 'Vaibhav',
    CustomerName: 'Shrivastava',
    Amount: 'xxte562342',
    Tax: 'dtcdfeg@hgxh.com',
    Mode: 'New York',
    Date: 'Some Depart...',
    Notes: 'This is payment notes',
  },
  {
    PaymentId: 4564656,
    CustomerId: 'Vaibhav',
    CustomerName: 'Shrivastava',
    Amount: 'xxte562342',
    Tax: 'dtcdfeg@hgxh.com',
    Mode: 'New York',
    Date: 'Some Depart...',
    Notes: 'This is payment notes',
  },
];

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'PaymentId',
    'CustomerId',
    'CustomerName',
    'Amount',
    'Tax',
    'Mode',
    'Date',
    'Notes',
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
