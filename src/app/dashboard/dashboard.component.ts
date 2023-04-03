import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  LoanId: number;
  CustomerName: string;
  LoanType: string;
  LastPayment: string;
  PaymentDue: string;
  LoanStatus: string;
}

export interface UserData1 {
  CustomerId: number;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  EmailAddress: string;
  Address: string;
  Department: string;
}

const tableData = [
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    LastPayment: 'xxte562342',
    PaymentDue: 'dtcdfeg@hgxh.com',
    LoanStatus: 'New York',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    LastPayment: 'xxte562342',
    PaymentDue: 'dtcdfeg@hgxh.com',
    LoanStatus: 'New York',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    LastPayment: 'xxte562342',
    PaymentDue: 'dtcdfeg@hgxh.com',
    LoanStatus: 'New York',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    LastPayment: 'xxte562342',
    PaymentDue: 'dtcdfeg@hgxh.com',
    LoanStatus: 'New York',
  },
  {
    LoanId: 4564656,
    CustomerName: 'Vaibhav',
    LoanType: 'Shrivastava',
    LastPayment: 'xxte562342',
    PaymentDue: 'dtcdfeg@hgxh.com',
    LoanStatus: 'New York',
  },
];

const tableData1 = [
  {
    CustomerId: 4564656,
    FirstName: 'Vaibhav',
    LastName: 'Shrivastava',
    PhoneNumber: 'xxte562342',
    EmailAddress: 'dtcdfeg@hgxh.com',
    Address: 'New York',
    Department: 'Some Depart...',
  },
  {
    CustomerId: 4564656,
    FirstName: 'Vaibhav',
    LastName: 'Shrivastava',
    PhoneNumber: 'xxte562342',
    EmailAddress: 'dtcdfeg@hgxh.com',
    Address: 'New York',
    Department: 'Some Depart...',
  },
  {
    CustomerId: 4564656,
    FirstName: 'Vaibhav',
    LastName: 'Shrivastava',
    PhoneNumber: 'xxte562342',
    EmailAddress: 'dtcdfeg@hgxh.com',
    Address: 'New York',
    Department: 'Some Depart...',
  },
  {
    CustomerId: 4564656,
    FirstName: 'Vaibhav',
    LastName: 'Shrivastava',
    PhoneNumber: 'xxte562342',
    EmailAddress: 'dtcdfeg@hgxh.com',
    Address: 'New York',
    Department: 'Some Depart...',
  },
  {
    CustomerId: 4564656,
    FirstName: 'Vaibhav',
    LastName: 'Shrivastava',
    PhoneNumber: 'xxte562342',
    EmailAddress: 'dtcdfeg@hgxh.com',
    Address: 'New York',
    Department: 'Some Depart...',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cardsList = [
    'Customers',
    'Total Loans',
    'Approved Loans',
    'Pending Loans',
    'Risk Loans',
    'Total Receivables',
  ];
  displayedColumns: string[] = [
    'LoanId',
    'CustomerName',
    'LoanType',
    'LastPayment',
    'PaymentDue',
    'LoanStatus',
  ];
  displayedColumns1: string[] = [
    'CustomerId',
    'FirstName',
    'LastName',
    'PhoneNumber',
    'EmailAddress',
    'Address',
    'Department',
  ];
  dataSource: MatTableDataSource<UserData>;
  dataSource1: MatTableDataSource<UserData1>;

  constructor() {
    this.dataSource = new MatTableDataSource(tableData);
    this.dataSource1 = new MatTableDataSource(tableData1);
  }
}
