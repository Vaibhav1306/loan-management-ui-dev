import { Component, ViewChild } from '@angular/core';
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
export class ListCustomersComponent {
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

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
