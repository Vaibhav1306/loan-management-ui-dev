import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarHelpService } from '../services/sidebar-help.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private sidebarHelpService: SidebarHelpService) {}

  ngOnInit(): void {
    this.sidebarHelpService.setSideNav(this.sidenav);
  }
}
