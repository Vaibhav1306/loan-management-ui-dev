import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  LoanId: number;
  CustomerName: string;
  LoanType: string;
  Installments: string;
  ROI: string;
  TotalAmount: string;
  PendingAmount: string;
  LoanStatus: string;
}

const tableData = [
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    Installments: 'xxte562342',
    ROI: 'dtcdfeg@hgxh.com',
    TotalAmount: 'New York',
    PendingAmount: 'Some Depart...',
    LoanStatus: 'This is payment LoanStatus',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    Installments: 'xxte562342',
    ROI: 'dtcdfeg@hgxh.com',
    TotalAmount: 'New York',
    PendingAmount: 'Some Depart...',
    LoanStatus: 'This is payment LoanStatus',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    Installments: 'xxte562342',
    ROI: 'dtcdfeg@hgxh.com',
    TotalAmount: 'New York',
    PendingAmount: 'Some Depart...',
    LoanStatus: 'This is payment LoanStatus',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    Installments: 'xxte562342',
    ROI: 'dtcdfeg@hgxh.com',
    TotalAmount: 'New York',
    PendingAmount: 'Some Depart...',
    LoanStatus: 'This is payment LoanStatus',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    Installments: 'xxte562342',
    ROI: 'dtcdfeg@hgxh.com',
    TotalAmount: 'New York',
    PendingAmount: 'Some Depart...',
    LoanStatus: 'This is payment LoanStatus',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    Installments: 'xxte562342',
    ROI: 'dtcdfeg@hgxh.com',
    TotalAmount: 'New York',
    PendingAmount: 'Some Depart...',
    LoanStatus: 'This is payment LoanStatus',
  },
];

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
})
export class LoansComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'LoanId',
    'CustomerName',
    'LoanType',
    'Installments',
    'ROI',
    'TotalAmount',
    'PendingAmount',
    'LoanStatus',
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
