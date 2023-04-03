import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
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
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
})
export class ListCustomersComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'CustomerId',
    'FirstName',
    'LastName',
    'PhoneNumber',
    'EmailAddress',
    'Address',
    'Department',
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
